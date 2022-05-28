const express = require("express");
const router = express.Router();
const Shop = require("../models/shop");

const newShop = new Shop({
    name: "Shop2",
    location: "mark",
    services: ["xy", "ab", "de"],
    customers: [],
});
// newShop.save();

// get particular shop details
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const shop = await Shop.findById(id);
        res.status(200).json({ shop: shop });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// get shops based on location and services
router.get("/", async (req, res) => {
    try {
        const location = req.query.location;
        const services = req.query.services;
        let shops;
        if (location) {
            shops = await Shop.find({ location });
        } else if (services) {
            shops = await Shop.find({ services: { $all: services } });
        } else {
            shops = await Shop.find({});
        }
        res.status(200).json({ shops: shops });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;
