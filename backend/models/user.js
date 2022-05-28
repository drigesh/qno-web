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
});

module.exports = mongoose.model("user", userSchema);
