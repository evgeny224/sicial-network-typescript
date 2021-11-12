import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultUserPhoto from "../../../Assets/Images/userPicture.png";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatusThunk, isOwner, savePhotoThunk, saveProfileThunk}) => {
    
    const [editMode, setEditMode] = useState(false);

    if(!profile){
        return <Preloader />
    }

    const changePhoto = (e) => {
        if(e.target.files.length === 1){
            savePhotoThunk(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfileThunk(formData).then(
            ()=>{setEditMode(false)}
        )
    }


    return(
        <div >
            <div>
                <img src = "https://peakvisor.com/img/news/jungfrau-monch-eiger.jpg" alt = "mountains" />
            </div>
            <div className = {style.description}>
                <div>
                    <img src={profile.photos.large || defaultUserPhoto} alt="photos" />
                </div>
                <div>
                    {isOwner && <input onChange = {changePhoto} type = "file" />}
                </div>
                {editMode ? <ProfileDataReduxForm initialValues = {profile} onSubmit = {onSubmit} profile = {profile}/> :  <ProfileData profile = {profile} 
                                                                isOwner = {isOwner} 
                                                                changeEditMode = {() => {setEditMode(true)}}/>}
                <div className = {style.status}>
                    <ProfileStatusWithHooks status = {status} updateUserStatusThunk = {updateUserStatusThunk}/>
                </div>
            </div>
        </div>
    )
}

    const ProfileData = ({profile, isOwner, changeEditMode}) => {
        return(
            <div>
                {isOwner && <button onClick = {changeEditMode}>EDIT</button>}
                <div>
                    <b>{profile.fullName}</b>
                </div>
                <div>
                    <b>Ищу работу</b>: {profile.lookingForAJob ? "Да" : "Нет"}
                </div>
                <div>
                    <b>Описание навыков</b> : {profile.lookingForAJobDescription}
                </div>
                <div>
                    <b>Контакты</b> : {Object.keys(profile.contacts).map( key => {
                        return <Contact key = {key} contactTitle = {key} contactValue = {profile.contacts[key]}   />
                    })}
                </div>
                <div>
                    <b>Обо мне</b> : {profile.aboutMe}
                </div>
            </div>
        )
    }


    const Contact = ({contactTitle, contactValue}) => {
    
        return <div className = {style.contacts}><b>{contactTitle}</b> : {contactValue}</div>
    }

export default ProfileInfo;