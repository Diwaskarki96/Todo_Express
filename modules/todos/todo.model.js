const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  created_at: { type: Date, default: Date.now() },
});

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
