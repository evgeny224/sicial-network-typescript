import React, { useState, useEffect } from "react";


    const ProfileStatusWithHooks = (props) =>  {

        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);

        useEffect( () => {
            setStatus(props.status)
        }, [props.status]);

        let activateEditMode = () => {
            setEditMode(true);
        }

        let deactivateEditMode = () => {
            setEditMode(false);
            props.updateUserStatusThunk(status)
        }

        let changeStatus = (e) => {
            setStatus(e.currentTarget.value);
        }


        return(
            <div>
                {!editMode &&  
                    <div>
                        <b>Статус</b> : <span onDoubleClick = {activateEditMode} >{props.status || "-------"}</span>
                    </div>}
                {editMode &&  
                    <div>
                        <b>Статус</b> : <input autoFocus = {true}  onBlur = {deactivateEditMode} onChange = {changeStatus} value = {status}/>
                    </div>}
            </div>
        )
    }


export default ProfileStatusWithHooks;