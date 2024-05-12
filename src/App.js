import React, { useState } from 'react';
import './App.css';

function MyButton({ onClick, text }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  let login;
  let register
  if (isLoggedIn) {
    login = <MyButton onClick={handleLogout} text="Sign out" />;
  } else {
    login = <MyButton onClick={handleLogin} text="Sign in" /> ;

  }

  return (
    <div className="parent">
      <div className='title'>
      <h1>HOOPERS </h1>
      </div>
      
      <div className='login-box'>
        {login} 
        <button type="button" onClick="#">
          Sign up
        </button>
      </div>

      <div className='navBar'>
        navbar
      </div>
    </div>
  );
}

export default App;