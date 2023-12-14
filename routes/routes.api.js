const router = require("express").Router();

const todoRouter = require("../modules/todos/todo.api");
const subtodoRouter = require("../modules/subtodos/subtodo.api");
router.use("/todos", todoRouter);
router.use("/subtodos", subtodoRouter);
module.exports = router;
