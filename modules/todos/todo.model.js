const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, emu: ["pending", "completed"], default: "pending" },
  created_at: { type: Date, default: Date.now() },
});

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
