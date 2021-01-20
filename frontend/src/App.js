import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo vem ajudar!" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
