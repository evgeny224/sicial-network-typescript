import { usersAPI } from "../API/api";
import { objectHelper } from "../Utilits/object-helpers";
import { UsersType } from "../types/types";



const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNTS = "SET_TOTAL_USERS_COUNTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRES = "TOGGLE_IS_FOLLOWING_PROGRES";



let initialState = {
    users: [] as  Array<UsersType>,
    pageSize: 100,
    totalUsersCounts: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgres: [] as Array<number>,
}

    export type initialStateType = typeof initialState

    const usersReducer = (state = initialState, action:any) => {

        switch(action.type){
            case FOLLOW:
                return {
                    ...state,
                    users: objectHelper(state.users, action.userId, true)
                }
            case UNFOLLOW:
                return{
                    ...state,
                    users: objectHelper(state.users, action.userId, false)
                }
            case SET_USERS: 
            return {
                ...state,
                users: action.users
            }
            case SET_CURRENT_PAGE:
                return{
                    ...state,
                    currentPage: action.currentPage
                }
            case SET_TOTAL_USERS_COUNTS:
                return{
                    ...state,
                    totalUsersCounts: action.totalUsersCounts
                }
            case TOGGLE_IS_FETCHING:
                return{
                    ...state,
                    isFetching: action.isFetching
                }
            case TOGGLE_IS_FOLLOWING_PROGRES:
                return {
                    ...state,
                    isFollowingInProgres: action.inProgress
                    ? [...state.isFollowingInProgres, action.userId]
                    : state.isFollowingInProgres.filter(userId => userId !== action.userId)
                }
            default:
                return state;
        }
    };

    type FollowActionType = {
        type: typeof FOLLOW
        userId: number
    }

    export const follow = (userId: number):FollowActionType  => ({type: FOLLOW, userId: userId});

    type UnfollowActionType = {
        type: typeof UNFOLLOW
        userId: number
    }
    export const unfollow = (userId: number):UnfollowActionType => ({type: UNFOLLOW, userId: userId});

    type SetUsersActionType = {
        type: typeof SET_USERS
        users: Array<UsersType>
    }
    export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users: users});

    type SetCurrentPageActionType = {
        type: typeof SET_CURRENT_PAGE
        currentPage: number
    }
    export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type:SET_CURRENT_PAGE, currentPage: currentPage});

    type SetTotalUsersCountsActionType = {
        type: typeof SET_TOTAL_USERS_COUNTS
        totalUsersCounts: number
    }
    export const setTotalUsersCounts = (totalUsersCounts: number): SetTotalUsersCountsActionType => ({type: SET_TOTAL_USERS_COUNTS, totalUsersCounts});

    type IsToggleFetchingActionType = {
        type: typeof TOGGLE_IS_FETCHING
        isFetching: boolean
    }
    export const isToggleFetching = (isFetching: boolean): IsToggleFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

    type ToggleIsFollowingInProgresActionType = {
        type: typeof TOGGLE_IS_FOLLOWING_PROGRES
        inProgress: boolean
        userId: number
    }
    export const toggleIsFollowingInProgres = (inProgress: boolean, userId: number): ToggleIsFollowingInProgresActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRES, inProgress: inProgress, userId: userId});



    export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
        return async (dispatch: any) => {
            dispatch(isToggleFetching(true));
            dispatch(setCurrentPage(currentPage));
            let data = await usersAPI.getUsers(currentPage, pageSize)
                dispatch(isToggleFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCounts(data.totalCount));
        }
    };

    const followUnfollowFlow = async(dispatch: any, usersId: number, followUnfollowAPI: any, followUnfollowAC: any) => {
        dispatch(toggleIsFollowingInProgres(true, usersId));
        let response = await followUnfollowAPI(usersId);
        if(response.data.resultCode === 0){
            dispatch(followUnfollowAC(usersId));
        }
    dispatch(toggleIsFollowingInProgres(false, usersId));
    }


    export const followThunkCreator = (usersId: number) => {
        return async (dispatch: any) => {
            followUnfollowFlow(dispatch, usersId, usersAPI.follow.bind(usersAPI), follow);
        }
    }
    export const unfollowThunkCreator = (usersId: number) => {
        return async (dispatch: any) => {
            followUnfollowFlow(dispatch, usersId, usersAPI.unfollow.bind(usersAPI), unfollow);
        }
    }

    export default usersReducer;
