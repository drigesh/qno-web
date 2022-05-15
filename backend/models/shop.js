const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    location: {
        type: String,
        default: null,
    },
    facilities: {
        type: Array,
    },
    customers: {
        type: Array,
    },
});

module.exports = mongoose.model("shop", shopSchema);
