import { getAuthUserData } from "./auth-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


export type initialStateType = {
    initialized: boolean
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

let initialState: initialStateType = {
    initialized: false, 
};


    const appReducer = (state = initialState, action: any): initialStateType => {
        switch(action.type) {
            case INITIALIZED_SUCCESS:

                return {
                    ...state,
                    initialized: true,
                }
            default:
                return state;
        }
    };

    export const initializedSuccess = (): initializedSuccessActionType => ({ type: INITIALIZED_SUCCESS } );


    export const initializedSuccessTC = () => (dispatch: any) => {
            let promise = dispatch(getAuthUserData());
            promise.then(() => {
                dispatch(initializedSuccess());
            })
    }
    

    export default appReducer;
