// imports
require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const { nextTick, getMaxListeners } = require("process");

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.DB_URI, { useUnifiedTopology: false });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => {
    return console.log("Database Connected!");
});

app.use(express.urlencoded({ extended: false}));
app.use(express.json());




//Style static folder
app.use(express.static(__dirname + '/public'));


//Template Engine
app.set("view engine", "ejs");

//route prefix
app.use("", require("./router/routes"));





app.listen(PORT, ()=> {
    console.log(`Server started at http://localhost:${PORT}`);
}); 