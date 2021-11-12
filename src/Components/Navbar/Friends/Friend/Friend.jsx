import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Friend.module.css";


    const Friend = (props) => {
        return(
            <div>
                <div className = {style.foto}>
                    <img src = {props.foto} alt = "foto" />
                </div>
                <div className = {style.name}>
                <NavLink to = {props.name}>{props.name} </NavLink>
                </div>
            </div>
        )
    }

    export default Friend;