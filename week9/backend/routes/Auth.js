const express = require('express');
const User = require("../models/User");

const router = express.Router();


router.post("/register", async (req, res)=>{
    const username = req.body["username"];
    const password = req.body["password"];

    if(username && password){
        try{
            await User.insertOne({username,password})
            return res.send({
                success: true,
                message: "Registration success"
            })
        }catch(er){
            return res.send({
                success: false,
                message: "Registration failed",
                er
            })
        }
    }

    return res.send({success: false, message: "Enter all fields"});
})

router.post("/login", async (req, res)=>{
    const {username, password} = req.body;
    const userData = await User.findOne({username, password});

    if(!userData){
        return res.send({
             success: false,
            message: "Invalid Login!"
        })
    }

    return res.send({
         success: true,
        message: "Login success",
        username
    });

})

module.exports = router;