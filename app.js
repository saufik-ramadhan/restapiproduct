var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var config = require("config");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var packageRouter = require("./routes/package");

var app = express();
var db = require("./config/keys").mongoURI;

/* Database Connect */
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(function () {
    console.log("MongoDB Connected");
  })
  .catch(function (err) {
    console.log(err);
  });

// don't show the log while testing
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//   app.use(mor)
// }

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/", packageRouter);

module.exports = app;
