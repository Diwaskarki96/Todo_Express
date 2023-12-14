const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Todo is working");
});
module.exports = router;
