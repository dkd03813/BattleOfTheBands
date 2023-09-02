var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { User } = require("../models");



router.post("/create", async (req, res) => {
  console.log("Received POST request to /api/create");
  let { username, password } = req.body;
  console.log(username, password);

  try {
    let hashPassword = await bcrypt.hash(password, saltRounds);

    console.log("Original Password: ", password);

    console.log(password);
    const newProfile = await User.create({
      username,
      password: hashPassword,
    });

    console.log("New User's auto-generated ID:", newProfile.id);

    // Send a success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);

    // Send an error response
    res.status(500).json({ message: 'User creation failed' });
  }
});



module.exports = router;
