import React from 'react';
import'./Workout.css';
import { Component } from 'react';
import Collapsible from './Collapsible.js';

class Workout extends Component {
  
    render(){
        return (
            <div>
            <Collapsible title='Week1'> <Collapsible title='Day 1'>
            <div> Exercise 1= Chest- Barbell Incline Bench Press-->Normal Set Reps: 15/12/10</div>
             <div>Exercise 2= Chest-PUSH Up-->Normal Reps: 15/12/10</div>
             <div>Exercise 3= Chest-Upper Pec Contractions-->Reps: 15/12/10</div>
             <div>Exercise 4= Dumbbell Incline Flys--> Reps: 15/12/10</div>
             <div>Exercise 5= Decline Sit Ups--->Reps 25/25</div>
             <div>Exercise 6= Basic Crunches --->Reps 25/25</div>
             <div>Exercise 7= Hanging Pikes --->Reps 25/25</div>
             <div>Exercise 8= Frog Sit Ups --->Reps 25/25</div>
             <div>Exercise 9= Snatch Shrug --->Reps 15/15/15(Trapezium)</div>
             <div>Exercise 10= Barbell Shrugs(Behind Back) --->Reps 15/15/15(Trapezium) </div>
             <div>Exercise 11= Standing Dumbbell Upright Row(Close Grip)--->Reps 15/15/15(Trapezium)</div>
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