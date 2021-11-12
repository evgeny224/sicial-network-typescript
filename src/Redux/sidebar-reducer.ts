import { friendsDataType } from "../types/types";


let initialState = {
    friendsData: [
        {id:1, foto: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg", name: "Andrey"},
        {id:2, foto: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png", name: "Sveta"},
        {id:3, foto: "https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg", name: "Olga"},
        {id:4, foto: "https://whatsism.com/uploads/posts/2018-07/1530546118_t2icojrry7o.jpg", name: "John"},
        {id:5, foto: "https://cs9.pikabu.ru/post_img/2020/04/13/6/1586771000240064724.png", name: "Inga"},
        {id:6, foto: "https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg", name: "Georg"},
    ] as Array<friendsDataType>,
}

    export type initialStateType = typeof initialState

    const sidebarReducer = (state = initialState, action: any):initialStateType  => {
        return state;
    }

    export default sidebarReducer;