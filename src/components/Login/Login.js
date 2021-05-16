import React from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";



const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'username'} component={'input'} placeholder={"Username"}/>
        </div>
        <div>
            <Field name={'password'} component={'input'} placeholder={"Password"}/>
        </div>
        <div>
            <button>Login</button>
        </div>
        <div>
            <Link to={'/register'}> <button>Register</button> </Link>
        </div>

    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreate(formData.username, formData.password);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;
