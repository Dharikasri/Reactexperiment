import React from 'react';
import '../Styles/login.css';

const Login = () => {
  return (
    <div>
      <div className="rectangle">WEB DASHBOARD</div>
      <div className="centered">
        <input type="text" placeholder="USERNAME" name="uname" required /><br />

        <input type="password" placeholder="PASSWORD" name="psw" required /><br />

        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Login;
