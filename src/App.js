import React from "react";
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, Switch } from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import {  withRouter } from "react-router-dom";
import { compose } from "redux";
import { initializedSuccessTC } from "./Redux/app-reducer";
import store from "./Redux/redux-store";
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";
import { Redirect } from 'react-router'


const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));

const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));


class App extends React.Component {

  catchAllUnhandleErrors = (reason, promise) => {
    alert("Some Error Occured");
  }
  

  componentDidMount(){

    this.props.initializedSuccessTC();
    window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
}

  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }

  render(){

    if(!this.props.initialized){
      return <Preloader />
    }
  
    return (
      <div className = "app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className = "app-wrapper-content">
        <Switch>
        <React.Suspense fallback={<div>Загрузка</div>}>
        <Route exact path = "/" render = {() => <Redirect to = {"/profile"} />} />
          <section>
            <Route path = "/dialogs" render = {() => <DialogsContainer />} />
            <Route path = "/profile/:userId?" render = {() => <ProfileContainer />}  />
          </section>
        </React.Suspense>
          <Route path = "/users" render = {() => <UsersContainer />}  />
          <Route path = "/login" render = {() => <Login />}  />
          <Route path = "/news" component = {News} />
          <Route path = "/music" component = {Music} />
          <Route path = "/settings" component = {Settings} />
          <Route path = "*" render = {() => <div>404 Page not found</div>} />
        </Switch>
        </div>
      </div>
  );
  }
}


let mapStateToProps = (state) => {
  return{
    initialized: state.app.initialized,
  }
}

  const AppContainer = compose(withRouter, connect(mapStateToProps, {initializedSuccessTC})) (App);

  const SamyraiJS = (props) => {
    return <BrowserRouter>
        <Provider store = {store}>
          <AppContainer />
        </Provider>
    </BrowserRouter>
    
}

export default SamyraiJS;