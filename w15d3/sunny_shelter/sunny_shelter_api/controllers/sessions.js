const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const User = require("../models/user.js");

// checking user's credentials

router.post("/", (req,res) => {
    User.findOne({ username: req.body.username}, (err, foundUser) => {
        // verify we found the user in the database, then confirm the password is correct
        
        if (err !== null) {
            console.log("Session - Post: Fetch failed", err)
            res.status(404).json({error: " USER ERROR - Incorrect username or password"});
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                let user = {...foundUser._doc}
                delete user.password;
                res.status(201).json(user);
            } else {
                res.status(404).json({ error: "Incorrect username or password"});
            }
        }
    });
});

// delete the session when user logs out.

router.delete("/", (req,res) => {
    req.session.destroy(() => {
        res.status(200);
    });
});

module.exports = router;