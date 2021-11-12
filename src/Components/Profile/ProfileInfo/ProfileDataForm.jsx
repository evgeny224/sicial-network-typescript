import React from "react";
import { fieldForm  } from "../../Common/FormControls/FormControls";
import { Input } from  "../../Common/FormControls/FormControls";
import { Textarea } from "../../Common/FormControls/FormControls";
import { reduxForm } from "redux-form";
import style from "../../../Components/Login/Login.module.css";


    const ProfileDataForm = ({handleSubmit, profile, error}) => {
    
        return(
            <form onSubmit = {handleSubmit}>
                
                <div>
                    <button>Сохранить</button>
                </div>
                {error && <div className = {style.errorMessage}>
                    {error}
                </div>}
                { fieldForm("Имя", "fullName", Input, []) }
                { fieldForm(null, "lookingForAJob", Input, [], {type: "checkbox"}, "Ищу работу" )}
                { fieldForm("Мои навыки", "lookingForAJobDescription", Textarea, []) }
                { fieldForm("Обо мне", "aboutMe", Textarea, []) }
                <div>
                    <b>Контакты</b> : {Object.keys(profile.contacts).map( key => {
                        return <div key = {key}> <b>{key} : { fieldForm(key, "contacts." + key, Input, []) } </b></div>
                    })}
                </div>
            </form>
        )
}

const ProfileDataReduxForm = reduxForm({form:'profile'})(ProfileDataForm);


export default ProfileDataReduxForm;
