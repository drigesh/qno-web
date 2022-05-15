require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.DB || "mongodb://0.0.0.0:27017/qno";

mongoose
    .connect(DB, { useNewUrlParser: true, wtimeoutMS: 2500 })
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log("Error: ", err));
