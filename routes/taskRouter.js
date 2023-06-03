const express = require("express");
const router = express.Router();

const { addTask, getTask } = require("../controller/taskController");

// route for addTask
router.post("/", addTask);

router.get("/:id", getTask);

module.exports = router;
