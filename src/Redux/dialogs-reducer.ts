import { dialogItemDataType, messagesDataType } from "../types/types";


const ADD_MESSAGE = "ADD-MESSAGE";


let initialState = {
    dialogItemData: [
    {id:1, name: "Victor", avatar:"http://archilab.online/images/1/123.jpg"},
    {id:2, name: "Sergey", avatar:"http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"},
    {id:3, name: "Nick", avatar:"https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg"},
    {id:4, name: "Igor", avatar:"https://shapka-youtube.ru/wp-content/uploads/2021/03/mrachnaya-avatarka-dlya-parney.jpg"},
    {id:5, name: "Natasha", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU"},
    {id:6, name: "Petr", avatar:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
] as  Array<dialogItemDataType>,

    messagesData: [
    {id:1, message: "Hello!"},
    {id:2, message: "Hi!"},
    {id:3, message: "I want to make some friends."},
    {id:4, message: "Me too!"},
    {id:5, message: "I am happy!"},
] as Array<messagesDataType>,
}

    export type initialStateType = typeof initialState


    const dialogsReducer = (state = initialState, action: any): initialStateType  => {

        switch(action.type){
            case ADD_MESSAGE:
                return {
                    ...state,
                    messagesData: [...state.messagesData, {id:6, message:action.newMessage}],
                }
            default:
                return state;
        }
    };

    type addMessageTextACType = {
        type: typeof ADD_MESSAGE
        newMessage: string
    }

    export const addMessageTextAC = (addMessageBody: any): addMessageTextACType => ({type: ADD_MESSAGE, newMessage: addMessageBody});

    export default dialogsReducer;

