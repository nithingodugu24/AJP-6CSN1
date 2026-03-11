const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;    

    if(username == null || password == null){
        return res.send({
            message: "Enter valid details"
        })
    }    

    if(username == "admin" && password == "admin"){
        return res.send({
            message: "Login success",
            authToken: "aagha.hwehawsh.heheh",
            refreshToken: "ahgawhah.ahahawh.ahahah"
        })
    }else{
        return res.send({
            message: "Enter valid credentials"
        })
    }
    
});

router.post('/signup', (req, res) => {
    res.send("<b>This is login page</b>")
});

module.exports = router