import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import { login } from "../../redux/auth-reduser";
import { AppStateType } from "../../redux/redux-store";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import style from "./../common/FormsControls/FormsControls.module.css"


type MapStatePropsType ={
    captchaUrl: string | null
    isAuth: boolean
}

type LoginFormOwnProps = {
   captchaUrl: string | null
}

const LoginForm:React.FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps> & LoginFormOwnProps > = (props)=>{
    
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
            {props.captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image","captcha",[required], Input, {})}
            {props.error && <div className={style.formSummaryError}>
             {props.error}
            </div>}
            <div>
            <button>login</button>
            </div>
        </form>)
        
}

const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnProps>({
    form: 'login'
})(LoginForm)


type MapDispatchPropsType ={
    login: (email: string, password: string, rememberMe: boolean, captcha: string)=> void
    isAuth: boolean
}

type LoginFormValuesType = {
email: string
password: string
rememderMe:boolean
captcha: string
}
type LoginFormValuesTypeKeys = Extract< keyof LoginFormValuesType, string> 

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props)=>{
    const on = (param:LoginFormValuesType) =>{
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
const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
