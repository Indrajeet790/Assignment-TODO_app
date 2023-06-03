const task = require("../models/todoModel");

// add task
const addTask = async (request, response) => {
  try {
    const newTodo = await task.create({
      name: request.body.name,
      description: request.body.description,
    });

    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// getTask by id
const getTask = async (req, res) => {
  const data = await task.findById(req.params.id);
  // console.log(req.params.id);

  res.status(200).json({
    message: "success",
    data,
  });
};

module.exports = { addTask, getTask };
