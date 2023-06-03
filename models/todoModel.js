const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["completed", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);
const task = mongoose.model("Task", TodoSchema);

module.exports = task;
