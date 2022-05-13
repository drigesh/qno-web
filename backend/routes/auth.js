const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    try {
        const { name, phone, password, cpassword } = req.body;
        if (!name || !phone || !password || !cpassword) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (password != cpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const userExists = await User.findOne({ phone });
        if (userExists) {
            return res.status(409).json({ error: "Phone number already exists" });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            phone,
            password: encryptedPassword,
        });
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
            expiresIn: 24 * 60 * 60 * 1000,
        });
        res.cookie("usertoken", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
        })
            .status(201)
            .json({ token: token });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { phone, password } = req.body;
        if (!phone || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }
        const validated = await bcrypt.compare(password, user.password);
        if (!validated) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
            expiresIn: 24 * 60 * 60 * 1000,
        });
        res.cookie("usertoken", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
        })
            .status(200)
            .json({ token: token });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/logout", (req, res) => {
    try {
        res.status(200).clearCookie("usertoken").json({ msg: "Successfully logged out" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;
