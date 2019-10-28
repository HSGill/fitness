import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Workout from './Workout.js';
import Home from './Home.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route :''
    }
  }
  onRouteChange  = (route) =>{
    this.setState({route:route});
  }
  render() {
    return (
      <div className="content">
        <Menu onRouteChange = {this.onRouteChange} />
        {this.state.route ==='home'
        ? <Home />
        : <Workout />
        

        }
        <footer className="footer zone"> ©Harry</footer>
      </div>
    );
  }
}
export default App;
