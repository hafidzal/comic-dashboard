import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <header className="navbar-styles">
        comic dashboard
      </header>
      <main className="main-section">
        <Card />
      </main>
      <footer className="footer">
        &copy; Hafidz
      </footer>
    </div>
  );
}

export default App;
