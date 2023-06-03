const express = require("express");
const app = express();
const PORT = 4400;

// Require dbConnection
const { connectToMongoDb } = require("./config/dbConnection");

// database connection
connectToMongoDb("mongodb://127.0.0.1:27017/TODO_APP")
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log("database is not connected");
  });

// required router file
const taskRouter = require("./routes/taskRouter");

// add middleware for data coming from body
app.use(express.json());

// creating a task routes
app.use("/", taskRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
