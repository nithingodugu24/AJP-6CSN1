const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const StudentRoutes = require("./routes/student-routes")

const app = express();

mongoose.connect("mongodb://localhost:27017/nithingodugu").then(()=>{
    console.log("Mdb Connection Established");
})
app.use(bodyParser.json());

app.use("/", StudentRoutes);

app.listen(8000, ()=>{
    console.log("running server");
    
})