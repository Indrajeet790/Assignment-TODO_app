const express = require("express");
const router = express.Router();

const {
  addTask,
  getTask,
  updateTask,
} = require("../controller/taskController");

// route for addTask
router.post("/", addTask);

router.get("/:id", getTask);

router.put("/:id", updateTask);

module.exports = router;
