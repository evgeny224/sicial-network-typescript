import { addPostTextAC } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



    const mapStateToProps = (state) => {
        return {
            state: state.profilePage,
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            addPostText: (addPostBody) =>{
                dispatch(addPostTextAC(addPostBody));
            },
        }
    }

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


