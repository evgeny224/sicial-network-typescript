import React from "react";
import style from "./Post.module.css";

const Post = (props) => {

    return(
                    <div className ={style.item}>
                        <img src = "https://img4.goodfon.ru/wallpaper/nbig/9/2a/art-avatarka-pitbull-pitbul-angry-dog-zloi-pes.jpg" alt = "avatar" />
                        {props.message}
                        <div>
                            <span>like {props.likesCount} </span>
                        </div>
                    </div>
    )
}

export default Post;