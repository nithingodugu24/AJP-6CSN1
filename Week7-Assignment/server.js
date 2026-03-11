const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res)=>{
    return res.render("index");
})

app.get("/distance", (req, res)=>{
    return res.render("distance");
})

app.listen(PORT, ()=>{
    console.log(`Server running at localhost:${PORT}`);
})