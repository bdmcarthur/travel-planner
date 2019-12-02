"use strict";

const { Router } = require("express");

const router = Router();

const Trip = require("./../models/Trip");
const User = require("./../models/user");

require("dotenv").config();

router.get("/all", (req, res, next) => {
  Trip.find({})
    .then(items => {
      res.json({ type: "success", data: { items } });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/add", (req, res, next) => {
  // console.log("ADDDD", req.body);
  const {
    title,
    description,
    itemStatus,
    imageUrl,
    dateStart,
    dateEnd
  } = req.body;

  Trip.create({
    title,
    description
    // ,
    // itemStatus,
    // imageUrl,
    // dateStart,
    // dateEnd
    // ,
    // user: req.user._id
  })
    .then(trip => {
      res.json({ type: "success", data: { trip } });
      console.log("DURING CREATION", trip);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
