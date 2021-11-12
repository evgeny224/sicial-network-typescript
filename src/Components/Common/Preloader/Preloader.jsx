import React from "react";
import HourGlass from "../../../Assets/Images/Hourglass.gif";
import style from "./Preloader.module.css"


    let Preloader = (props) =>{
        return <img src = {HourGlass} className = {style.HourGlass} alt = "preloader" />
    }

    export default Preloader;