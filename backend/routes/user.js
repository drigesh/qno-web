const express = require("express");
const verifyToken = require("../middlewares/auth");
const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    try {
        res.status(200).json({ msg: "You can check in" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
