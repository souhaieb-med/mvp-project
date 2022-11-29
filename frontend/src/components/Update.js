import React, { useState } from "react";
import axios from "axios";
const UpdateWorkout = (props) => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);


const update=(id,body)=>{
axios.put(`http://localhost:4000/api/workouts/${id}`,body);
}
        // event for the click on the update button to submit it
  const handleSubmit = async () => {
    window.location.reload();
    const workout = { title, load, reps };
        //fetching the data while posting after the edit
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // make sure to return the inputs empty after updating/adding a workout if it passed without errors
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setLoad("");
      setReps("");
      setTitle("");
      setError(null);
      console.log("hey nibba");
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3> update workout</h3>

      <label> Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label> Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label> Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button onClick={()=>update(props.id,{title,load,reps,error})}>Update Workout</button> {/* accessing to the props with title,load,reps and error to modify it  */}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UpdateWorkout;
