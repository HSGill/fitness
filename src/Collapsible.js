import React from 'react';
import { Component } from 'react';
import './Collapsible.css';

class Collapsible extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }

  }
  togglePanel (){
    this.setState({open : !this.state.open});
  }
  render(){
    return(<div>
      <div onClick= {(e)=> this.togglePanel(e)} className='header'>{this.props.title}</div>
      {this.state.open ? (<div className='content'>
             {this.props.children} </div>
      ) : null }
      </div>
    );
  }
}

export default Collapsible;