const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    contact: {
        type: String,
        default: null,
    },
    location: {
        type: String,
        default: null,
    },
    ratings: {
        type: String,
        default: null,
    },
    services: {
        type: Array,
        default: null,
    },
    customers: {
        type: Array,
    },
});

module.exports = mongoose.model("shop", shopSchema);
