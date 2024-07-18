// importing express
var express=require("express");

// initialization
var app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})
 app.get('/login',(req,res)=>{
    res.send("Login")
 })

app.listen(3000,(req,res)=>{
    console.log("port is up and running");
})