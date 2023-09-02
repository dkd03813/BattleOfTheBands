var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { User } = require("../models");





// POST route for user login
router.post("/login", async (req, res) => {
  try {
    // Handle user authentication logic here
    // Example: Check user credentials and return a response
    // You might use sessions, JWT, or other authentication mechanisms
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
