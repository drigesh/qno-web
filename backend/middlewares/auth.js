const User = require("../models/user");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const token = req.cookies.usertoken;
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await User.findById(decoded.user_id);
        if (!user) {
            return res.status(404).json({ error: "No user found" });
        }
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: "You need a token" });
    }
};

module.exports = verifyToken;
