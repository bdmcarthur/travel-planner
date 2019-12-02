"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  imageUrl: [
    {
      image: String
    }
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  location: {
    type: Object
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  }
});

module.exports = mongoose.model("Trip", schema);
