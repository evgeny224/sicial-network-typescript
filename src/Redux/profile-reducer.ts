import { usersAPI, statusAPI } from "../API/api";
import { stopSubmit } from "redux-form";
import { postsDataType, profileType, photosType } from "../types/types";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SUCCESS_PHOTO = "SUCCESS_PHOTO";





    let initialState = {
        postsData: [
        {id:1, message: "Hello everyone!", likesCount: 3},
        {id:2, message: "Hi! I am glad to see you!", likesCount: 5},
        {id:3, message: "Thank you so much!", likesCount: 2},
        {id:4, message: "Nice to meet you!", likesCount: 7},
    ] as Array<postsDataType>,
        profile: null as profileType | null,
        status: "",
}

    export type initialStateType = typeof initialState

    const profileReducer = (state = initialState, action: any): initialStateType => {
            switch(action.type){
                case ADD_POST:
                    return{
                        ...state,
                        postsData: [...state.postsData, {id:5, message: action.post, likesCount: 1}]
                    }
                case SET_USER_PROFILE:
                    return{
                        ...state,
                        profile: action.profile,
                    }
                case SET_USER_STATUS:
                    return{
                        ...state,
                        status: action.status,
                    }
                case SUCCESS_PHOTO:
                    return{
                        ...state,
                        profile: {...state.profile, photos: action.photos} as profileType
                    }
                default: 
                    return state;
    }
}
    type addPostTextACType = {
        type: typeof ADD_POST
        post: string
    }

    export const addPostTextAC = (addPostBody: string): addPostTextACType => ({type: ADD_POST, post: addPostBody});

    type setUserProfileType = {
        type: typeof SET_USER_PROFILE
        profile: profileType
    }
    export const setUserProfile = (profile: profileType): setUserProfileType => ({type: SET_USER_PROFILE,  profile: profile});

    type setUserStatusType = {
        type: typeof SET_USER_STATUS
        status: string
    }
    export const setUserStatus = (status: string): setUserStatusType  => ({type:SET_USER_STATUS, status: status });

    type successPhotoType = {
        type: typeof SUCCESS_PHOTO
        photos: photosType
    }
    export const successPhoto = (photos: photosType): successPhotoType => ({type: SUCCESS_PHOTO, photos: photos })


    export const setUserStatusThunk = (userId: number) => async(dispatch: any) => {
        const response = await statusAPI.getUserStatus(userId)
            dispatch(setUserStatus(response.data));
    }

    export const updateUserStatusThunk = (status: string) => async(dispatch: any) => {
        const response = await statusAPI.updateUserStatus(status)
            if(response.data.resultCode === 0){
            dispatch(setUserStatus(status));
            }
    }

    export const getUserProfile = (userId: number) => async(dispatch: any) => {
        const response = await usersAPI.setUserProfile(userId)
            dispatch(setUserProfile(response.data));
    }

    export const savePhotoThunk = (photo: any) => async(dispatch: any) => {
        const response = await usersAPI.setUserPhoto(photo)
        if(response.data.resultCode === 0){
            dispatch(successPhoto(response.data.data.photos));
        }
    }

    export const saveProfileThunk = (profile: profileType) => async(dispatch: any, getState: any) => {
        const userId = getState().auth.userId
        const response = await usersAPI.saveProfile(profile)
        if(response.data.resultCode === 0){
            dispatch(getUserProfile(userId))
        }
        else{
            dispatch(stopSubmit("profile", {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    }

    export default profileReducer;




