import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { required, maxLenght } from "../../Utilits/Validators/validator";
import { Textarea } from "../Common/FormControls/FormControls";


const maxLenght50 = maxLenght(50);


    const Dialogs = (props) => {
        
        let dialogsElements = props.state.dialogItemData.map( dialog =>  <DialogItem name = {dialog.name} key = {dialog.id}  id = {dialog.id} avatar = {dialog.avatar} />)

        let messagesElements = props.state.messagesData.map( message => <Message message = {message.message} key = {message.id}/>)


        const addMessage = (values) => {
            props.addMessageText(values.addMessageBody);
        }


        return (
            <div className = {style.dialogs}>
                <div className = {style.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className = {style.messages}>
                    { messagesElements }
                    <AddMessageFormForm onSubmit = {addMessage}/>
                </div>
            </div>
        )
    }

    const addMessageForm = (props) => {
        return(
            <form onSubmit = {props.handleSubmit}>
                    <div>
                        <Field name = {"addMessageBody"} component = {Textarea} validate = {[required, maxLenght50]}/>
                    </div>
                    <button>Add Post</button>
            </form>
        )
    }

    const AddMessageFormForm = reduxForm({form:'addMessageBody'})(addMessageForm);


export default Dialogs;