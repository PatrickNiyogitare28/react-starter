import React  from "react";
import Input from "../input";
import './styles.css';

const LoginForm = () => {
    return (
        <div className="login-form">
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
        </div>
    )
}

export default LoginForm;