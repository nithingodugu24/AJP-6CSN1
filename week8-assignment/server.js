const express = require('express');
const jwt = require("jsonwebtoken");
const {mongoose} = require("mongoose");
const Users = require("./models/User");

mongoose.connect("mongodb://localhost:27017/nithingodugu").then(()=>{
    console.log("Mongo con established");
})

const PORT = 8000;
const app = express();
const PRIVATE_KEY = "allubhAAi123";

app.use(express.json());

app.post("/register", async (req, res)=>{
    const email = req.body["email"];
    const password = req.body["password"];

    if(email && password){
        return res.send(await Users.insertOne({
            email,password
        }))
    }


    res.send({message: "Enter all fields"});
})

app.post("/login", async (req, res)=>{

    const {email, password} = req.body;

    if(email && password){
        const user =  await Users.findOne({email, password})
        
        if(user){
            const authToken = jwt.sign({
                email: email,
                exp: Math.floor(Date.now() / 1000) + (60 )
            }, PRIVATE_KEY);
            return res.send({authToken, message:"Login success"})
        }
    }
    return res.send({message:"Invalid login"})
})

app.get("/me", (req, res)=>{
    try{
        const token = req.headers.authorization.split("Bearer ")[1];
        const tokenDetails = jwt.verify(token, PRIVATE_KEY);
        
        return res.send(tokenDetails)
    }catch(err){
        return res.send({ message: err})
    }

})

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
})

