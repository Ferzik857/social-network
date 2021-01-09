import React from "react";
import {Field, reduxForm} from "redux-form"
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";


const LoginForm = (props)=>{
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}  name={"login"} component={Input} validate={required}/>
            </div>
            <div>
            <Field placeholder={"Password"} name={"Password"} component={Input} validate={required}/>       
            </div>
            <div>
            <Field type = {"checkbox"} name={"rememder me"} component={Input} /> rememder me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>)
        
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = ()=>{
    const on = (param) =>{
    console.log(param);    
    }
   return <div>
    <h1>Login</h1> 
    <LoginReduxForm  onSubmit={on}/>
    </div>
}

export default Login;