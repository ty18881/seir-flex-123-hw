const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

const bcrypt = require("bcrypt");

// creating new user record, including encrypting the password provided.

router.post("/", (req, res) => {
    console.log("User Controller - Post - ", req.body);
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );

    // creating record in the DB

    User.create(req.body, (err, newUser) => {
        let user = {...newUser._doc};
        delete user.password; 
        // removing the password from JSON response
        res.status(201).json(user);
    });
});

module.exports = router;