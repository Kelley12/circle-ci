import React from 'react';
import logo from './logo.png';
import './App.css';
import ActivateLasers from './ActivateLasers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ActivateLasers />
      </header>
    </div>
  );
}

export default App;
