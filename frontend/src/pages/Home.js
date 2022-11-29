// import React from 'react'
import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/workoutDetails";
import AddWorkout from "../components/AddWorkout";
import UpdateWorkout from "../components/Update";

function Home() {
  const [workouts, setWorkouts] = useState(null);
const [view,setView]=useState('add')
const [idWorkout,setIdWorkout]=useState('')
  useEffect(() => {
    const showWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts"); // we can add "proxy":"http://localhost:4000" to package json and the fetch will be "/api/workouts" without using cors
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };

    showWorkouts();
  }, []);
const changeId=(option)=>{

  setIdWorkout(option);
}
  const changeView=(option)=>{
    setView(option);
  }
const renderView =(option)=>{
 if(option==='add'){return <AddWorkout />;}
  else {return <UpdateWorkout id={idWorkout} />;}
}
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} changeId={changeId} workout={workout} changeView={changeView} />
          ))}
        {/*mapping over the data */}
      </div>
     {renderView(view)}
    </div>
  );
}

export default Home;
