const router = require("express").Router();
const Movie = require("../models/Movie");
const { Router } = require("express");
const verify = require("../verifyToken");

//create movie
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed! "); //if he is not a user
  }
});

module.exports = router;
