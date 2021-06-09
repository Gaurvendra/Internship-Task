const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const addItems = require("./helpers/addItems");
const app = express();

const DB = "mongodb://127.0.0.1:27017/cart";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(`no connection`));

// MIDDLEWARE
app.use(express.json());

// ADD ITEMS TO DATABASE
// use only one time otherwise it will create copy in db
// addItems()

// ROUTES
const routes = require("./routes");
routes(app);

// LISTEN ON PORT 3000
app.listen("3000", () => {
  console.log("******************");
  console.log("server started at port 3000");
  console.log("******************");
});
