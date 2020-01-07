import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contact from './Contact.js';
import Workout from './Workout.js';
import Home from './Home.js';
class App extends React.Component {
  /* constructor(props){
    super(props);
    this.state = {
      route :''
    }
  }
  onRouteChange  = (route) =>{
    this.setState({route:route});
  } */
  render() {
    return (
      <HashRouter>
      <div>
      <h1>Fitness App</h1>
      <ul className="header">
        <li><NavLink exact to= "/">Home</NavLink></li>
        
        <li><NavLink to= "/workout">Workout</NavLink></li>
        
        <li><NavLink to= "/contact">Contact</NavLink></li>
      </ul>
      <div className = "content">
     
        <Route exact path="/" component={Home}/>
        <Route path="/workout" component={Workout}/>
        <Route path="/contact" component={Contact}/>
</div>
      </div>
      </HashRouter>
    );
  }
}
export default App;
