import { addPostTextAC } from "./profile-reducer";
import profileReducer from "./profile-reducer";



test("testing of reducer", () => {
        let action = addPostTextAC("newPost");
        let state = {
            postsData: [
                {id:1, message: "Hello everyone!", likesCount: 3},
                {id:2, message: "Hi! I am glad to see you!", likesCount: 5},
                {id:3, message: "Thank you so much!", likesCount: 2},
                {id:4, message: "Nice to meet you!", likesCount: 7},
            ]
        };

        let newState = profileReducer(state, action);

        expect(newState.postsData.length).toBe(5);
    });

    test("testing of notreducer", () => {
        let action = addPostTextAC("newPost");
        let state = {
            postsData: [
                {id:1, message: "Hello everyone!", likesCount: 3},
                {id:2, message: "Hi! I am glad to see you!", likesCount: 5},
                {id:3, message: "Thank you so much!", likesCount: 2},
                {id:4, message: "Nice to meet you!", likesCount: 7},
            ]
        };

        let newState = profileReducer(state, action);

        expect(newState.postsData.length).toBe(5);
    });


