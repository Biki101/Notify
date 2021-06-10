const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://dbNotify:water123@cluster0notify.dmzit.mongodb.net/dbNotify?retryWtyrites=true&w=majority";

mongoose.connect(uri, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection estabilished sucessfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const adminRouter = require("./routers/admin.router");
const docRouter = require("./routers/document.router");

app.use("/admin", adminRouter);
app.use("/doc", docRouter);
