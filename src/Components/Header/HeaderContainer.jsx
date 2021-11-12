import React from "react";
import Header from "./Header";
import { getAuthUserData } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { logoutTC } from "../../Redux/auth-reducer";



    class HeaderContainer extends React.Component {
        
        render(){
            return(
                <>
                    <Header {...this.props}/>
                </>
            )
        }
    }

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    })


export default connect(mapStateToProps, { getAuthUserData, logoutTC })(HeaderContainer)

