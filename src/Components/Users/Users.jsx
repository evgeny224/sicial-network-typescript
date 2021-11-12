import React from "react";
import style from "./Users.module.css"
import Pagiantor from "../Common/Paginator/Paginator";
import User from './User';

    // type TypeProps = {
    //     totalUsersCounts: number,
    //     pageSize: number,
    //     currentPage: number,
    //     onPageChanged: () => void,
    //     users: Array<number>,
    //     id: any,
    //     unfollowThunkCreator: ()=> void,
    //     followThunkCreator: ()=> void,
    //     isFollowingInProgres: Array<number>,
    // }


    const Users = ({totalUsersCounts, pageSize, currentPage, onPageChanged, users, ...props}) => {


        return(
        <div>
            <div>
                {<Pagiantor totalUsersCounts = {totalUsersCounts}  
                            pageSize = {pageSize} 
                            currentPage = {currentPage} 
                            onPageChanged = {onPageChanged}/>}
            </div>
            
            <div className = {style.users}> 
                {users.map( users =>  <User  key = {users.id}
                            users = {users} 
                            unfollowThunkCreator = {props.unfollowThunkCreator}
                            followThunkCreator = {props.followThunkCreator}
                            isFollowingInProgres = {props.isFollowingInProgres}
                            />
                )}
            </div>
            {/* <button onClick = {() => setCount(count + userWithPhotos)}>Sum</button> */}
        </div>
        )
    };


    export default Users;
