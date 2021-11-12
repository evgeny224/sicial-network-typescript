import React from "react";
import style from "./Friends.module.css"
import Friend from "./Friend/Friend";



    const Friends = (props) => {
        let friendElements = props.state.friendsData.map( element => <Friend foto = {element.foto} key = {element.id} name = {element.name} />)

        return(
            <div className = {style.title}>
                <div>
                    <h3>Friends</h3>
                </div>
                <div className = {style.friends}>
                    {friendElements}
                </div>
            </div>
        )
    }

export default Friends;