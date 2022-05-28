require("dotenv").config();
require("./config/db");
const express = require("express");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const shopRouter = require("./routes/shop");
const checkinRouter = require("./routes/checkin");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/shops", shopRouter);
app.use("/api/checkin", checkinRouter);

module.exports = app;
