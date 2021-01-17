import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {Field, reduxForm} from "redux-form"
import { login } from "../../redux/auth-reduser";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = (props)=>{
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field placeholder={"email"}  name={"email"} component={Input} validate={required}/>
            </div>
            <div>
            <Field placeholder={"Password"} name={"Password"} component={Input} validate={required}/>       
            </div>
            <div>
            <Field type = {"checkbox"} name={"rememderMe"} component={Input} /> rememder me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/> }
            {props.captchaUrl && createField("Symbols from image","captcha",[required], Input, {})}
            {props.error && <div className={style.formSummaryError}>
             {props.error}
            </div>}
            <div>
            <button>login</button>
            </div>
        </form>)
        
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props)=>{
    const on = (param) =>{
    props.login(param.email, param.password, param.rememderMe, param.captcha);    
    }
if(props.isAuth){
    return <Redirect to={"/profile"} />
}

   return <div>
    <h1>Login</h1> 
    <LoginReduxForm  onSubmit={on} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state)=> ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
