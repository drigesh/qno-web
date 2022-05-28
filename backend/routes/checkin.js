const express = require("express");
const router = express.Router();
const Shop = require("../models/shop");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const getIdx = (customers, id) => {
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].id === id) {
            return i;
        }
    }
    return -1;
};

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const shop = await Shop.findById(id);
        const token = req.cookies.usertoken;
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        const customers = shop.customers;
        const idx = getIdx(customers, decoded.user_id);
        if (idx !== -1) {
            const date = new Date(customers[idx].end);
            if (date <= new Date()) {
                // remove the customer from the array
                customers.splice(idx, 1);
            } else {
                return res.status(401).json({ msg: "You can check in once" });
            }
        }
        let start;
        if (customers.length) {
            start = Math.max(new Date(customers.at(-1).end).getTime(), new Date().getTime());
        } else {
            start = new Date().getTime();
        }
        let end = start + 20 * 60 * 1000;
        const customerObj = {
            id: decoded.user_id,
            time: 20,
            start: new Date(start),
            end: new Date(end),
        };
        customers.push(customerObj);
        await shop.updateOne({ customers: customers });
        const user = await User.findById(decoded.user_id);
        await user.updateOne({ checkin: { shopId: id, date: start } });
        res.status(200).json({ msg: "Successfully checked in" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/cancel", async (req, res) => {
    try {
        const token = req.cookies.usertoken;
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await User.findById(decoded.user_id);
        const checkedin = user.checkedin;
        if (checkedin !== null) {
            const id = checkedin.shopId;
            const shop = await shop.findById(id);
            const customers = shop.customers;
            const idx = getIdx(customers, decoded.user_id);
            if (idx !== -1) {
                // remove the customer from the array
                customers.splice(idx, 1);
            }
            await Shop.updateOne({ customers: customers });
            await User.updateOne({ checkedin: null });
        }
        res.status(200).json({ msg: "Successfully cancelled" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;
