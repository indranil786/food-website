const express = require("express");
const router = express.Router();

const User = require('../models/User');








router.get("/", (req, res) =>{
    res.render('index')
});

router.get("/about", (req, res) =>{
    res.render('about')
});

router.get("/contact", (req, res) =>{
    res.render('contact')
});

router.get("/welcome", (req, res) =>{
    res.render('welcome')
});

router.get("/login", (req, res) =>{
    res.render('login')
});

router.get("/register", (req, res) =>{
    res.render('register')
});





module.exports = router;