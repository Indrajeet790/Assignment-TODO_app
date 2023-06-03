const express = require("express");
const router = express.Router();

const { addTask } = require("../controller/taskController");

// route for addTask
router.post("/task", addTask);

module.exports = router;
