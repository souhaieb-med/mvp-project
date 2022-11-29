import React, { useState } from "react";

const AddWorkout = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  // a function to hundle the submit when we click on the add workout button
  const handleSubmit = async () => {
    window.location.reload();
    const workout = { title, load, reps };
    // fetching data while posting
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    // reset the inputs to initial value after creating
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
      <h3> Add a New Workout</h3>

      <label>
        <strong>Exercise Title:</strong>
      </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>
        <strong> Load (in kg):</strong>
      </label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>
        <strong> Reps:</strong>
      </label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add Workout</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default AddWorkout;
