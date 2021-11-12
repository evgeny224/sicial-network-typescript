
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

    let store = {
    _callSubscriber() {
        console.log("state has changed")
    },

    _state: {

        dialogPage:{
                dialogItemData: [
                {id:1, name: "Victor", avatar:"http://archilab.online/images/1/123.jpg"},
                {id:2, name: "Sergey", avatar:"http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"},
                {id:3, name: "Nick", avatar:"https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg"},
                {id:4, name: "Igor", avatar:"https://shapka-youtube.ru/wp-content/uploads/2021/03/mrachnaya-avatarka-dlya-parney.jpg"},
                {id:5, name: "Natasha", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU"},
                {id:6, name: "Petr", avatar:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
            ],
            
                messagesData: [
                {id:1, message: "Hello!"},
                {id:2, message: "Hi!"},
                {id:3, message: "I want to make some friends."},
                {id:4, message: "Me too!"},
                {id:5, message: "I am happy!"},
            ],
            messageText: "Message Text",
        },

        profilePage: {
                postsData: [
                {id:1, message: "Hello everyone!", likesCount: 3},
                {id:2, message: "Hi! I am glad to see you!", likesCount: 5},
                {id:3, message: "Thank you so much!", likesCount: 2},
                {id:4, message: "Nice to meet you!", likesCount: 7},
            ],
                textPost: "Text",
        },

        sidebarPage: {
            friendsData: [
                {id:1, foto: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg", name: "Andrey"},
                {id:2, foto: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png", name: "Sveta"},
                {id:3, foto: "https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg", name: "Olga"},
                {id:4, foto: "https://whatsism.com/uploads/posts/2018-07/1530546118_t2icojrry7o.jpg", name: "John"},
                {id:5, foto: "https://cs9.pikabu.ru/post_img/2020/04/13/6/1586771000240064724.png", name: "Inga"},
                {id:6, foto: "https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg", name: "Georg"},
            ]
        },

    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },

    dispatch(action){
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogPage, action);
        sidebarReducer(this._state, action);
        
        this._callSubscriber(this._state);
    }
};



export default store;
