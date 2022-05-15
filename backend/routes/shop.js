const express = require("express");
const router = express.Router();
const Shop = require("../models/shop");

// const newShop = new Shop({ name: "Khokha", location: "IITG", facilities: [], customers: [] });
// newShop.save();

router.get("/", async (req, res) => {
    try {
        const shops = await Shop.find({});
        res.status(200).json({ shops: shops });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const shop = await Shop.findById(id);
        res.status(200).json({ shop: shop });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;
