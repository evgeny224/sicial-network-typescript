import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";



    const Header = (props) => {


        return(
            <header className = {style.header}>
                <img src = "https://res.cloudinary.com/chelsea-production/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_auto,h_320,q_auto,w_640,z_1.0/v1/logos/leagues/Premier_League_logo_transparent" alt = "logo" />
                <div className = {style.login}>
                {props.isAuth ?  <div>{props.login} - <button onClick = {props.logoutTC}>Log-out</button></div>
                    : <NavLink to = "/login" className = {style.nav}>Login</NavLink>}
                </div>
            </header>
        )
    }

export default Header;