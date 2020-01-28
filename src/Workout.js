import React from 'react';
import'./Workout.css';
import { Component } from 'react';
import Collapsible from './Collapsible.js';

class Workout extends Component {
  
    render(){
        return (
            <div >
            <Collapsible title='Week1'> <Collapsible title='Day 1'>
            <div className="container">
            <div className='item'> <h1>Exercise 1</h1>Chest- Barbell Incline Bench Press-->Normal Set Reps: 15/12/10</div>
             <div className='item'><h1>Exercise 2</h1> Chest-PUSH Up-->Normal Reps: 15/12/10</div>
             <div className='item'><h1>Exercise 3</h1> Chest-Upper Pec Contractions-->Reps: 15/12/10</div>
             <div className='item'><h1>Exercise 4</h1> Dumbbell Incline Flys--> Reps: 15/12/10</div>
             <div className='item'><h1>Exercise 5</h1> Decline Sit Ups--->Reps 25/25</div>
             <div className='item'><h1>Exercise 6</h1> Basic Crunches --->Reps 25/25</div>
             <div className='item'><h1>Exercise 7</h1> Hanging Pikes --->Reps 25/25</div>
             <div className='item'><h1>Exercise 8</h1> Frog Sit Ups --->Reps 25/25</div>
             <div className='item'><h1>Exercise 9</h1> Snatch Shrug --->Reps 15/15/15(Trapezium)</div>
             <div className='item'><h1>Exercise 10</h1> Barbell Shrugs(Behind Back) --->Reps 15/15/15(Trapezium) </div>
             <div className='item'><h1>Exercise 11</h1> Standing Dumbbell Upright Row(Close Grip)--->Reps 15/15/15(Trapezium)</div>
</div>
            </Collapsible>  
            
            <Collapsible title='Day 2' ></Collapsible>
            <Collapsible title='Day 3' ></Collapsible>
            <Collapsible title='Day 4' ></Collapsible>
            <Collapsible title='Day 5' ></Collapsible>
            <Collapsible title='Day 6' ></Collapsible>
            <Collapsible title='Day 7' ></Collapsible>
            </Collapsible>
            
            </div>
     
        );

    }
    
}

export default Workout;