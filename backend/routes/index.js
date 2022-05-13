const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

router.get("/", (req, res) => {
    res.status(200).json({ msg: "hi" });
});

module.exports = router;
