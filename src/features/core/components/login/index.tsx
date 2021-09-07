import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="bg" />
      <form>
        <header>
          <img src="https://assets.codepen.io/3931482/internal/avatars/users/default.png?format=auto&height=80&version=1592223909&width=80" />
        </header>
        <div className="inputs">
          <input type="text" placeholder="username or email" />
          <input type="password" placeholder="password" />
          <p className="light">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
      <footer>
        <button>Continue</button>
        <p>
          {"Don't have an account?"} <a href="#">Sign Up</a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
