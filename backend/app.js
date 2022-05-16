require("dotenv").config();
require("./config/db");
const express = require("express");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const shopRouter = require("./routes/shop");
const checkinRouter = require("./routes/checkin");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/shops", shopRouter);
app.use("/checkin", checkinRouter);

module.exports = app;
