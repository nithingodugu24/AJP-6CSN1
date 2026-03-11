const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("index page");
})

router.get("/about", (req, res)=>{
    res.send("about page");
})

router.get("/privacy-policy", (req, res)=>{
    res.send("privacy policy page");
})

module.exports = router