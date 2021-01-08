import React from "react";
import {Field, reduxForm} from "redux-form"
const LoginForm = (props)=>{
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}  name={"login"} component={"input"}/>
            </div>
            <div>
            <Field placeholder={"Password"} name={"Password"} component={"input"}/>       
            </div>
            <div>
            <Field type = {"checkbox"} name={"rememder me"} component={"input"}/> rememder me
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
    const on = (sss) =>{
    console.log(sss);    
    }
   return <div>
    <h1>Login</h1> 
    <LoginReduxForm  onSubmit={on}/>
    </div>
}

export default Login;