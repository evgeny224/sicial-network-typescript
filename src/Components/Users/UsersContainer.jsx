import React from "react";
import { connect } from "react-redux";
import {  setUsers,  setCurrentPage, setTotalUsersCounts, isToggleFetching, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { getUsers, getUsersCounts, getPageSize, getCurrentPage, getIsFetching, getisFollowingInProgres } from "../../Redux/users-selectors";




    class UsersClass extends React.Component  {


        componentDidMount(){
                    const {currentPage, pageSize} = this.props;
                    this.props.getUsersThunkCreator(currentPage, pageSize);
            }

        onPageChanged = (pageNumber) =>{
            const {pageSize} = this.props;
            this.props.getUsersThunkCreator(pageNumber, pageSize);
        }


            render(){
                return(
                    <>
                        {this.props.isFetching ? <Preloader /> : null}
                        <Users totalUsersCounts = {this.props.totalUsersCounts}
                                pageSize = {this.props.pageSize}
                                currentPage = {this.props.currentPage}
                                onPageChanged = {this.onPageChanged}
                                users = {this.props.users}
                                isFollowingInProgres = {this.props.isFollowingInProgres}
                                followThunkCreator = {this.props.followThunkCreator}
                                unfollowThunkCreator = {this.props.unfollowThunkCreator}

                        />
                    </>
                )
            }
    }





        const mapStateToProps = (state) =>{
            return {
                users: getUsers(state),
                totalUsersCounts: getUsersCounts(state),
                pageSize: getPageSize(state),
                currentPage: getCurrentPage(state),
                isFetching: getIsFetching(state),
                isFollowingInProgres: getisFollowingInProgres(state),
            }
        }



    export default compose(
        connect(mapStateToProps, {
            setUsers,
            setCurrentPage,
            setTotalUsersCounts,
            isToggleFetching,
            getUsersThunkCreator,
            followThunkCreator,
            unfollowThunkCreator,
        }),
    )(UsersClass)


