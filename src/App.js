import React from 'react';
import undraw from './img/undraw.png'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
     
    <nav className="blue sticky  zone" >
    <ul className="main-nav">
    <li>Home</li>
      <li><a href=" ">Workout Program</a></li>
      <li><a href=" ">Meal Plan</a></li>
      <li className="push"><a href=" ">Contact</a></li>
    </ul>
    </nav>
    { /* 
     <div className="Container zone"><img className="cover" alt="content" src={undraw}></img>/></div>
     */}
     <div class="zone blue grid-wrapper">
    <div class="box zone">Week1</div>
    <div class="box zone">2</div>
    { /* 
    <div class="box zone">3</div>
    <div class="box zone">4</div>
    <div class="box zone">5</div>
    <div class="box zone">6</div>
    <div class="box zone">7</div>
    <div class="box zone">8</div>
    */}
  </div>
     
     <footer className="footer zone"> ©Harry</footer>
    </div>
  );
}

export default App;
