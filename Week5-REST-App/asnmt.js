const express = require('express');
const PORT = 8001;
const app = express();

app.get("/addition", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(isNaN(a) || isNaN(b)){
        return res.end("invalid number");
    }
    const ans = a+b;

    return res.end(`Answer = ${ans}`);
})

app.get("/sub", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(isNaN(a) || isNaN(b)){
        return res.end("invalid number");
    }
    const ans = a-b;

    return res.end(`Answer = ${ans}`);
})

app.get("/division", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(isNaN(a) || isNaN(b)){
        return res.end("invalid number");
    }
    if(b != 0){
        const ans = a/b;
        return res.end(`Answer = ${ans}`);
    } else {
        return res.end("b value cannot be zero");
    }

})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});