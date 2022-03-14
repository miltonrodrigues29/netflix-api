const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//UPDATE

router.put("/:id", async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
  }
});

//DELETE
//GET
//GET ALL
//USER STATS  (total users per month)
