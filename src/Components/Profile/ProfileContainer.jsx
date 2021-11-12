import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, setUserStatusThunk, updateUserStatusThunk, savePhotoThunk } from "../../Redux/profile-reducer";
import {  withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../Components/hoc/withAuthRedirect";
import { compose } from "redux";
import { saveProfileThunk } from "../../Redux/profile-reducer";

    class ProfileContainer extends React.Component {

        refreshProfile = () => {
            let userId = this.props.match.params.userId;
            if(!userId){
                userId = this.props.autorizedUserId;
            }
            if(!userId){
                this.props.history.push("/login");
            }
            this.props.getUserProfile(userId);
            this.props.setUserStatusThunk(userId);
        }

        componentDidMount(){
            this.refreshProfile();
        }

        componentDidUpdate(prevProps){
            if(this.props.match.params.userId !== prevProps.match.params.userId){
                this.refreshProfile();
            }
        }

        render(){


        return(
            <>
                <Profile    {...this.props}
                            isOwner = {!this.props.match.params.userId}
                            profile = {this.props.profile} 
                            status = {this.props.status}
                            savePhotoThunk = {this.props.savePhotoThunk}
                            saveProfileThunk = {this.props.saveProfileThunk}
                            updateUserStatusThunk = {this.props.updateUserStatusThunk}/>
            </>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            autorizedUserId: state.auth.userId,
            isAuth: state.auth.isAuth,
        }
    }

    
    export default compose(
        connect(mapStateToProps, {getUserProfile, setUserStatusThunk, savePhotoThunk, updateUserStatusThunk, saveProfileThunk}),
        withRouter,
        withAuthRedirect,
    )(ProfileContainer);


