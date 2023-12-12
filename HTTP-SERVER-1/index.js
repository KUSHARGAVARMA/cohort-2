const express=require("express");
const app= express();
app.use('express.json()');
const port=3000
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.post('/',(req,res)=>{
    console.log(req.body);
})
// create a todo app that lets users store todos on the server
// try to create a http sever from scratch in c
// createa a http server in golang
app.listen(port);