const router = require("express").Router();
const todoController = require("./todo.controller");

router.post("/", async (req, res, next) => {
  try {
    const result = await todoController.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const result = await todoController.getById(req.params.id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const result = await todoController.updateById(req.params.id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await todoController.deleteById(req.params.id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
