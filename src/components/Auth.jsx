/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Authentication.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          <div>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <input type="password" placeholder="Enter your password" />
          </div>
          {!isLogin && (
            <div>
              <input type="password" placeholder="Confirm your password" />
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={toggleAuthMode}>
            {isLogin ? ' Sign Up' : ' Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
