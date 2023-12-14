const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Subtodo is working");
});
module.exports = router;
