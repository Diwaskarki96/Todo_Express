const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
mongoose.connect(DB_URL).then(() => {
  console.log("Database is connected..");
});
app.use("/", indexRouter);
app.listen(PORT, () => {
  console.log(`Server is running at port${PORT}`);
});
