const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    password: {
        type: String,
    },
    checkin: {
        type: Object,
        default: null,
    },
    token: {
        type: String,
    },
});

module.exports = mongoose.model("user", userSchema);
