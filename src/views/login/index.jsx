import React from 'react';
import LoginForm from '../../components/login-form';
import './styles.css';

const LoginPage = () => {
    return (
      <div className="login-form-container">
          <div>
          <h1>Login </h1>
          <LoginForm />
          </div>
      </div>
    )
}

export default LoginPage;