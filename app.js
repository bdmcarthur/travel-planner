"use strict";

const { join } = require("path");
const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const serveFavicon = require("serve-favicon");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const tripsRouter = require("./routes/trips");
const mongoose = require("mongoose");
const app = express();

// Setup view engine
app.set("views", join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(serveFavicon(join(__dirname, "public/images", "favicon.ico")));
app.use(express.static(join(__dirname, "public")));
app.use(
  sassMiddleware({
    src: join(__dirname, "public"),
    dest: join(__dirname, "public"),
    outputStyle:
      process.env.NODE_ENV === "development" ? "nested" : "compressed",
    sourceMap: true
  })
);

// app.use(
//   session({
//     secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
//     store: new MongoStore({
//       mongooseConnection: "mongodb://127.0.0.1:27017/travel-database"
//     }),
//     resave: false, //required
//     saveUninitialized: false //required
//   })
// );
app.use(
  session({
    secret: "sdf",
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

app.use("/", indexRouter);
app.use("/trip", tripsRouter);
app.use("/user", usersRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get("env") === "development" ? error : {};

  res.status(error.status || 500);
  res.render("error");
});

module.exports = app;
