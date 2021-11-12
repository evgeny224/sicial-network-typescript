import React from "react";
import style from "./Users.module.css"
import userPicture from "../../Assets/Images/userPicture.png";
import { NavLink } from "react-router-dom";



    const User = ({users, unfollowThunkCreator, followThunkCreator, isFollowingInProgres}) => {
        
        return(
            <div>
                <div className = {style.users}> 
                    <NavLink to = {"/profile/" + users.id}>
                        <span className = {style.usersPhoto}>
                            <img src = {users.photos.small != null ? users.photos.small : userPicture} alt = "photography"/>
                        </span>
                    </NavLink>
                    <div>
                        {users.followed ? <button 
                            disabled = {isFollowingInProgres.some(usersId => usersId === users.id)} 
                            onClick = { () => {
                                unfollowThunkCreator(users.id)
                        }}>Unfollow</button> 
                        : <button disabled = {isFollowingInProgres.some(usersId => usersId === users.id)} 
                        onClick = { () => {
                            followThunkCreator(users.id)
                            }}>Follow</button>}
                    </div>
                    <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                    </span>
                </div>)
            </div>
        )
    };


    export default User;
