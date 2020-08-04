const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello port 3001, learning AWS");
})

const port = process.env.port || 3001; // if there are other env, work witht hat or use port 3001

app.listen(port, ()=>{
    console.log("port 3001 listen sucess");
});

