import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLenght } from "../../../Utilits/Validators/validator";
import { Textarea } from "../../Common/FormControls/FormControls";

const maxLenghtt = maxLenght(30);

const MyPosts = (props) => {


    let postsElements = props.state.postsData.map( post => <Post message = {post.message} key = {post.id} likesCount = {post.likesCount} />)



    const addPostMessage = (values) => {

        props.addPostText(values.addPostBody);
    }



    return(
            <div className = {style.postBlock}>
        
                <div className = {style.myPosts}> 
                    <h3>My Posts</h3>
                </div>
                <AddMessageReduxForm  onSubmit = {addPostMessage}/>
                <div className = {style.newPost}>
                    New post
                </div>
                <div>
                    { postsElements }
                </div>
            </div>
    )
}

    const addPostForm = (props) => {
        return(
            <form onSubmit = {props.handleSubmit}>
                    <div>
                        <Field name = {"addPostBody"} component = {Textarea} validate = {[required, maxLenghtt]} placeholder = {"Your Post"}/>
                    </div>
                    <button>Add Post</button>
            </form>
        )
    }

    const AddMessageReduxForm = reduxForm({form:'addPostBody'})(addPostForm);




export default React.memo (MyPosts);