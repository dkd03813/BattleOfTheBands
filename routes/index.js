var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { User } = require("../models");
const findProfile = require("../middleware/findProfile");
const authCheck = require("../middleware/authCheck");

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
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);

    // Send an error response
    res.status(500).json({ message: "User creation failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const hashPassword = user.password;
    const userID = user.id;

    const result = await bcrypt.compare(password, hashPassword);

    if (result) {
      const token = jwt.sign({ id: userID }, "superSecretPrivateKey", {
        expiresIn: "1h",
      });

      // Send user data along with the token
      const userData = {
        id: userID,
        username: user.username,
        // Add other user data here if needed
      };

      res.cookie("token", token);
      return res.status(200).json({ success: true, message: "User successfully logged in", token, user: userData });
    } else {
      console.log("User couldn't login");
      return res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});


//route for handling the edit of a user's account

router.get("/game/user/:id", authCheck.authCheck, async (req, res) => {
  const { id } = req.params; // Retrieve the id from URL parameters
  try {
    console.log("Fetching user data for ID:", id);
    // Find the user by their ID
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    // Extract user profile information
    const userProfile = {
      id: user.id,
      username: user.username,
      // Add other profile information here if needed
    };
    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile by ID:', error);
    res.status(500).json({ error: 'Could not fetch user profile' });
  }
});

router.post("/game/user/:id", authCheck.authCheck,findProfile.findProfile, (req, res) => {
  const { username, id, password } = req.user;
  res.status(200).json({ success: true, user: { username, id, password } });
});

//handle the edit of a user at a certain id
// Import necessary modules and middleware

router.post("/game/user/edit/:id", authCheck.authCheck, findProfile.findProfile, async (req, res) => {
  try {
    const id = req.params.id;
    const { username, password } = req.body;

    // Use req.user instead of req.foundProfile
    const profile = req.user;

    if (!profile) {
      return res.status(404).json({ message: "Profile not found for ID: " + id });
    }

    // Update the profile fields
    profile.username = username;
    // Hash the password here (you can use bcrypt or another library)
    // Example: profile.password = await bcrypt.hash(password, 10);

    // Save the updated profile
    await profile.save();

    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating user data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/game/user/delete/:id", authCheck.authCheck,findProfile.findProfile, async (req,res) => {
  try {
    const id = req.params.id;
    const { username } = req.body;

    // Use req.user instead of req.foundProfile
    const profile = req.user;

    if (!profile) {
      return res.status(404).json({ message: "Profile not found for ID: " + id });
    }

    // Update the profile fields
    profile.username = username;
    // Hash the password here (you can use bcrypt or another library)
    // Example: profile.password = await bcrypt.hash(password, 10);

    // Save the updated profile
    await profile.destroy();

    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating user data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
})


module.exports = router;
