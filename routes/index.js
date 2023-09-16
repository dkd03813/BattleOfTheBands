var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { User } = require("../models");
const { BandMember } = require('../models');
const {UserSave} = require("../models")
const {Events} = require("../models")
const {sequelize} = require("../models")
const findProfile = require("../middleware/findProfile");
const authCheck = require("../middleware/authCheck");
const { Op } = require('sequelize');

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

//route for displaying the band members on the game start component for users to select from

router.get('/game', async (req, res) => {
  try {
    const bandMembers = await BandMember.findAll();
    res.json(bandMembers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//this route is to handle creating the association between the user that is logged in and the band members that the user has selected

router.post('/save', async (req, res) => {
  try {
    const { userID, bandMemberIDs, bandName } = req.body;

    // Create a separate entry in UserSaves for each selected band member
    await Promise.all(
      bandMemberIDs.map(async (bandMemberID) => {
        // Fetch the selected band member
        const selectedBandMember = await BandMember.findByPk(bandMemberID);

        // Create an entry in UserSaves with the selected band member's data
        const userSavesRecord = {
          userID,
          bandMemberID,
          money: 0, // You can set the initial money value here
          members: selectedBandMember.name, // Include the selected band member's name
          bandName, // Include the user's entered band name
        };

        // Insert the record into the UserSaves table
        await UserSave.create(userSavesRecord);
      })
    );

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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

//route responsible for dispalying the members of hte band based off of 

router.get("/game/main/:bandName", async (req, res) => {
  try {
    const bandName = req.params.bandName; // Retrieve bandName from URL params

    // Perform a database query here to fetch band members based on bandName
    // Replace this with your actual database query logic
    const bandMembers = await UserSave.findAll({
      where: {
        bandName: bandName,
      },
    });

    // Query the UserSaves table to get money and cred for the bandName
    const userSaveData = await UserSave.findOne({
      where: {
        bandName: bandName,
      },
    });

    const money = userSaveData ? userSaveData.money : 0;
    const cred = userSaveData ? userSaveData.cred : 0;

    // Combine band members, money, and cred into a single object
    const responseData = {
      bandMembers: bandMembers,
      money: money,
      cred: cred,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/game/mediaEvent/:bandName", async (req, res) => {
  try {
    const bandName = req.params.bandName; // Retrieve bandName from URL params

    const eventTypes = ["Tv Appearance", "Podcast", "Interviews", "Magazine", "Commercial", "Meet and Greet"];
    
    // Query the database to find a random event of the specified types
    const randomEvent = await Events.findOne({
      where: {
        eventType: eventTypes,
      },
      order: sequelize.fn('random'),
    });

    console.log("Random Event:", randomEvent); // Add this console log
    
    if (!randomEvent) {
      return res.status(404).json({ message: 'No events found' });
    }
    
    // Respond with the selected random event
    res.json(randomEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/game/updateUserSaves/:bandName", async (req, res) => {
  try {
    const { bandName } = req.params;
    const { eventCred, eventMoney } = req.body;

    // Find all user UserSaves records based on bandName
    const userSaves = await UserSave.findAll({
      where: { bandName },
    });

    if (!userSaves) {
      return res.status(404).json({ error: "UserSave records not found" });
    }

    // Update UserSaves with eventCred and eventMoney for all records
    for (const userSave of userSaves) {
      userSave.cred += eventCred;
      userSave.money += eventMoney;

      // Save the updated UserSaves record
      await userSave.save();
    }

    res.status(200).json({ message: "UserSaves updated successfully" });
  } catch (error) {
    console.error("Error updating UserSaves:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
