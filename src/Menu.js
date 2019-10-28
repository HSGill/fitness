import React from 'react';
import './Menu.css';

const Menu = ({onRouteChange}) => {
    return (
    <nav className="content blue sticky  zone" >
    <ul className="main-nav">
    <li onClick={() =>onRouteChange('home')}>Home</li>
      <li onClick={() =>onRouteChange('workout')}><a href=" ">Workout Program</a></li>
      <li onClick={() =>onRouteChange('mealplan')}><a href=" ">Meal Plan</a></li>
      <li className="push"><a href=" ">Contact</a></li>
    </ul>
    </nav>
    )
};

export default Menu;