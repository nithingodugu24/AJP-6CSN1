const express = require('express');
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
const PORT = 8000;


app.use(express.json());

app.use("/", testRoutes);
app.use("/auth", authRoutes);


app.listen(PORT, ()=>{
    console.log(`Server Running at Port:${PORT}`);
})