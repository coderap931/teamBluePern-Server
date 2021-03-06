const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
//TODO incorporate adding an email to the user and check if it works
//! Register endpoint
router.post("/register", async (req, res) => {
    try {
        const { username, email, passwordhash } = req.body.user;
        //encrypt user passwordhash here
        console.log(username, passwordhash); //test
        const salt = bcrypt.genSaltSync(12); //generating the salt
        console.log(salt); //test
        const pwHashed = bcrypt.hashSync(passwordhash, salt); // hashing the passwordhash
        console.log(pwHashed)//test
        const newUser = await User.create({ //await user creation
            username: username, //define username clearly
            email: email, //fine email clearly
            passwordhash: pwHashed //define passwordhash as pwHashed 
        });

        let token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

        console.log(newUser, User);
        res.status(200).json({
            message: "saved",
            user: newUser,
            sessionToken: token
        });
    } catch (err) {
        if (err) {
            res.status(500).json({
                message: `${err}`,
            });
        }
    }
});

//! Login endpoint
router.post("/login", async (req, res) => {
    const { username, email, passwordhash } = req.body.user;
    // where username or email is equal to the username or email in the request body

    try {
        const user = await User.findOne({
            where: {
                [Op.or]: [{ username }, { email }]
            }
    });
        //compare our passwordhash to the DB passwordhash for the user
         // "(passwordhash," calls into parameter in 36. "user.passwordhash)" refers to line 39 and stepping into the object
        console.log("Username: ", user.username, "Email :", user.email);
        // depending on userAuth value 0/1 we proceed or throw
        //TODO generate jwt for the user and save it to database
        if (!user.username) {
            //* If userAuth (the passwordhash) is not right, run this...(lines 56-59)
            res.status(401).json({
                message: "Invalid login"
            });
            return false;
            //* Otherwise, run else where we assign a token and run the object in lines 64-68)
        } else {
            const userAuth = bcrypt.compareSync(passwordhash, user.passwordhash);
            console.log(userAuth);
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
        
        res.status(200).json({
            username: user.username,
            email: user.email,
            message: "User successfully logged in!",
            user: User,
            sessionToken: token
        });
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Failed to log user in"
        });
    }
});

module.exports = router;