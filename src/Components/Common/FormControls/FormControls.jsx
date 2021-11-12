import React from "react";
import style from "./FormControls.module.css";
import { Field } from "redux-form";


    const FormControls = ({input, meta, child, ...props}) => {
        const hasError = meta.touched && meta.error;

        return(
            <div>
                <div>
                    {props.children}
                </div>
                { hasError && <span className ={style.errorMessage}>{meta.error}</span> }
            </div>
        )
    }


    export const Textarea = (props) => {
        const {input, meta, child, ...restProps} = props
        return(
            <FormControls {...props}><textarea {...input} {...restProps}/></FormControls>
        )
    }

    export const Input = (props) => {
        const {input, meta, child, ...restProps} = props
        return(
            <FormControls {...props}><input {...input} {...restProps}/></FormControls>
        )
    }

    export const fieldForm = (placeholder, name, component, validate, props = {}, text = "") => (
        <div className = {style.text}>
            <Field placeholder = { placeholder } name = { name } component = { component } validate = { validate } {...props}/>
            {text}
        </div>
    )

