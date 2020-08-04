const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello port 3001, learning AWS");
})

app.listen(3001, ()=>{
    console.log("port 3001 listen sucess");
});

