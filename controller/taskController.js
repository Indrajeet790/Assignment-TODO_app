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

module.exports = { addTask };
