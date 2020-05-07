require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// for authentication

const session = require("express-session");


const shelterController = require("./controllers/animals.js");
// add controllers to support authentication

const sessionsController = require("./controllers/sessions.js");
const usersController = require("./controllers/users.js");

// Error / Disconnection
mongoose.connection.on("error", err =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// Secret for authentication and session management
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// middleware
app.use(express.json()); //use .json(), not .urlencoded()

// CORS middleware:
const whitelist = [
  "http://localhost:3000",
  "https://fathomless-sierra-68956.herokuapp.com"
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors());

// animal routes use this controller
app.use("/animals", shelterController);
// users and sessions use these controllers.
app.use("/sessions", sessionsController);
app.use("/users", usersController);



// Web server:
app.listen(process.env.PORT, () => {
  console.log("sheltering animals on port", process.env.PORT);
});
