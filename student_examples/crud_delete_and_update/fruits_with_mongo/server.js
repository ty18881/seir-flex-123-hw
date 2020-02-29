const express = require("express");
const app = express();
const methodOverride = require("method-override");

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

// method-override to support the delete route.

app.use(methodOverride("_method"));
// note:  _method is what will be recognized.  Must match
// what's in your ejs file.

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/fruitsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});



// import the express router
const fruitsController = require("./controllers/fruits.js");

// any request for fruits route get directed to the fruitsController.
app.use("/fruits", fruitsController);

app.get("/", (req,res) => {
  res.redirect("/fruits");
})
/**
 * WILDCARD route
 * if you hit my server and the explicit route doesn't exist,
 * we'll take you to the INDEX route.
 */
app.get("*", (req, res) => {
  res.redirect("/fruits");
})
// Web server:
app.listen(3000, () => {
  console.log("listening");
});
