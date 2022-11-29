
import React from 'react'

import axios from 'axios'

const WorkoutDetails = ({workout,changeView,id,changeId})=>{
    function refreshPage() {
      window.location.reload(false);
    }

    // console.log(workout); 

    // a function apllied wen we click on the delete button to delete a workout
    const handleClick = () => {
        console.log(workout._id);
        axios
        .delete(`http://localhost:4000/api/workouts/${workout._id}`)
        .then((response) => {
            console.log(response);
            refreshPage();
        })
        .catch((err) => {
            console.log(err);
        });
        // const EditClick =(id,body) =>{
        //     axios.put(`http://localhost:4000/api/workouts/${id}`,body)
        //     .then((response)=>{
        //        console.log(response);
        //         refreshPage();
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        // })
        // const response = await fetch('http://localhost:4000/workouts/' + workout._id,{
    //     method: 'DELETE'
    // })
    // const json = await response.json()
    // if(response.ok){
    //     console.log(json)
    //     window.location.reload(false);
    // }
     };
    return (
      <div className="workout-details">
        <h3>{workout.title}</h3>
        <p>Load (kg): {workout.load}</p>
        <p>Reps: {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <button  onClick={handleClick}>Delete</button>
        
         <button onClick={()=>{     //this button made to change the view 
            changeId(workout._id)
            changeView('')} }>Edit</button> 
      </div>
    );
}
//}

export default WorkoutDetails; 
