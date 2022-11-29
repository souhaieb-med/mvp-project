require("dotenv").config(); // requiring the dotenv after installing it with (npm i dotenv)

const express = require("express"); //requiring the express after installing it with (npm i express)
const mongoose = require("mongoose"); // requiring mongoose after installing it with (npm i mongoose)
const workoutRoutes = require("./routes/workouts"); // requiring our workouts
const cors = require('cors')
let PORT = 4000;
// express app
const app = express();
app.use(cors());
//middleware
app.use(express.json());

app.use((req, res, next) => {
//   console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes); // basically this will be our path :D

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(PORT, () => {
      console.log("connectin to db && listenening on port ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//
