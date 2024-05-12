import React, { useState } from 'react';
import './App.css';

function MyButton({ onClick, text }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

function Panel() {
  return (
    <div>
      <p>tu bedzie caly html</p>
    </div>
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

  let content;
  if (isLoggedIn) {
    content = <MyButton onClick={handleLogout} text="Wyloguj" />;
  } else {
    content = <MyButton onClick={handleLogin} text="Zaloguj" />;
  }

  return (
    <div className="divl1">
      <h1>{isLoggedIn ? 'Zalogowany' : 'Wylogowany'} czarnuch </h1>
      <div>
        {content}
      </div>
      <Panel />
    </div>
  );
}

export default App;