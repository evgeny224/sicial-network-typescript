import React from "react";
import { reduxForm } from "redux-form";
import style from "./Login.module.css";
import { Input } from "../../Components/Common/FormControls/FormControls";
import { required } from "../../Utilits/Validators/validator";
import { connect } from "react-redux";
import { loginTC } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { fieldForm  } from "../Common/FormControls/FormControls";



    const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    
        return(
            <form onSubmit = {handleSubmit}>
                { fieldForm("Login", "email", Input, [required]) }
                { fieldForm("Password", "password", Input, [required]) }
                { fieldForm(null, "rememberMe", Input, [], {type: "checkbox"}, "Remember Me" )}
                {captchaUrl &&
                <img src = {captchaUrl} alt="captcha" />}
                {captchaUrl && fieldForm("Anti-bot simbols", "captcha", Input, [required])}
                {error && <div className = {style.errorMessage}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }


    const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

    const Login = (props) => {

        const onSubmit = (formData) => {
            props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
        }

        if(props.isAuth){
            return <Redirect to = "/profile" />
        }

        return(
            <div className = {style.login}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit = {onSubmit} captchaUrl = {props.captchaUrl}/>
            </div>

        )
    }

    let mapDispatchToProps = (state) => ({
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    })

    export default connect(mapDispatchToProps, {loginTC}) (Login);