const task = require("../models/todoModel");

// add task
const addTask = async (req, res) => {
  try {
    const newTodo = await task.create({
      name: req.body.name,
      description: req.body.description,
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
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

// const updateTask = async (req, res) => {
//   const data = await task.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   return res.status(200).json(data);
// };
const updateTask = async (req, res) => {
  const data = await task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log("data");

  // res.status(200).json({
  //   message: "success",
  //   data: {
  //     updateTask,
  //   },
  // });
};
module.exports = { addTask, getTask, updateTask };
