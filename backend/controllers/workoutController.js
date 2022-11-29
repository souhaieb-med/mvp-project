const Workout = require("../models/workoutModel");

// get all workouts 
const getWorkouts = async(req, res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts);

}

// get one workout

const getWorkout = async(req, res)=>{
    const {id} = req.params
    const workout = await Workout.findById(id)
    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
    })
    }
    res.status(200).json(workout);
};

// create new workout

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
                // add doc to our db 
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// delete a workout
const deleteWorkout = async(req, res)=>{
 const {id} = req.params
 const workout = await Workout.findOneAndDelete({_id: id});
 if (!workout) {
   return res.status(404).json({
     message: "Workout not found",
   });
 }
 res.status(200).json(workout);
}

// update a workout 
const updateWorkout = async(req,res)=>{
    const {id} = req.params;
    const {title, load, reps} = req.body;
    const workout = await Workout.findOneAndUpdate({_id: id}, {title, load, reps});
     if (!workout) {
   return res.status(404).json({
     message: "Workout not found",
   });
 }
 res.status(200).json(workout);
}






module.exports = {
    createWorkout, 
    getWorkout, 
    getWorkouts,
    deleteWorkout,
    updateWorkout,

}