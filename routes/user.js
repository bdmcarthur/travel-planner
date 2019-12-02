"use strict";
const User = require("../models/User");
const { Router } = require("express");
const router = Router();
const passport = require("../passport");

router.post("/signup", (req, res) => {
  console.log("user signup", req.body);
  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      User.create({
        username,
        password
      })
        .then(newUser => {
          res.json({ type: "success", data: { newUser } });
          console.log("DURING CREATION", newUser);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });
});

router.post(
  "/login",
  // function(req, res, next) {
  //   console.log("routes/user.js, login, req.body: ");
  //   console.log(req.body);
  //   next();
  // },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    res.send(req.user);
  }
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
