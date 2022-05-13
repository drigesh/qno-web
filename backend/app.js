require("dotenv").config();
require("./config/db");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/auth", authRouter);

module.exports = app;
