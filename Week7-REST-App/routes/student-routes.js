const express = require('express');
const router = express.Router();
const Student = require("../models/Student");

router.get("/students", async (req, res)=>{
    let students = await Student.find();
    return res.send(students);
})

router.post("/students", async (req, res)=>{
    let data = req.body;
    console.log(data);
    
    return res.send(await Student.insertOne(data));
})

module.exports = router;