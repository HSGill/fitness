import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
    <nav className="content blue sticky  zone" >
    <ul className="main-nav">
    <li>Home</li>
      <li><a href=" ">Workout Program</a></li>
      <li><a href=" ">Meal Plan</a></li>
      <li className="push"><a href=" ">Contact</a></li>
    </ul>
    </nav>
    )
};

export default Menu;