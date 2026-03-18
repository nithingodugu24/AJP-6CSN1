const express = require("express");

const PORT = 8000;
const app = express();

const API_KEY = "test123";

function checkApiKey(req, res, next){
    const userKey = req.headers["x-api-key"];


    if(userKey == API_KEY){
        next();
    }else{
        res.send({
            message: "Invalid Key bro"
        });
    }
}

function verify(req, res, next){
    let x = req.headers["x"];
    let y = req.headers["y"];

    if(x && y && (parseInt(x) + parseInt(y)) == 5 ){
         next();
        
    }

   return res.send({
            message: "not Verified"
        })
}

app.get("/", (req, res)=>{
    res.send({
            message: "Welcome"
        })
})


app.get("/students",checkApiKey, (req, res)=>{
    res.send({
        data: [
            {name: "Nithingodugu"}
        ]
    })
})

app.get("/verify",verify, (req, res)=>{
    res.send({
        message:"verified"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})