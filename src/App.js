import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Workout from './Workout.js';

function App() {
  return (
    <div className="content">
     <Menu />
    <Workout />
     <footer className="footer zone"> ©Harry</footer>
    </div>
  );
}

export default App;
