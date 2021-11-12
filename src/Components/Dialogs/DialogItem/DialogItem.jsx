import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";


    const DialogItem = (props) => {
        let path = "/dialogs/" + props.id

        return(
            <div>
                <div className = {style.avatar}>
                    <img src = {props.avatar} alt = "avatar" />
                </div>
                <div className = {style.dialog}>
                    <NavLink to = {path} activeClassName = {style.activeName}>{props.name}</NavLink>
                </div>
            </div>
        )
    };


export default DialogItem;