import React from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div className = {style.content}>
            <ProfileInfo    isOwner = {props.isOwner}
                            profile = {props.profile} 
                            status = {props.status}
                            savePhotoThunk = {props.savePhotoThunk}
                            saveProfileThunk = {props.saveProfileThunk}
                            updateUserStatusThunk = {props.updateUserStatusThunk}/>
            <MyPostsContainer store = {props.store} dispatch = {props.dispatch}/>
        </div>
    )
}

export default Profile;


