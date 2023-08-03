const express=require("express");//import express
const app = express();
require("dotenv").config();//import dotenv
const cors=require('cors');//import Cross-origin resource sharing
const mongoose=require('mongoose');//import mongoose
app.use(express.json());//use json to built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.


mongoose.connect(process.env.Mongo)
.then(()=>console.log('db atlas connected succéesfully!!! '));
//connect widh db atlas

app.listen(process.env.PORT||10000,(err)=>{err?console.log(err)
    :console.log(`server is running in this port"${process.env.PORT}"`)});//conected server and making

app.get("/",(req,res)=>{
    res.send('Hello! In My Social Media App')
});
app.use( cors() );
app.use("/users",require('./routes/Routers'));
app.use("/api/users",require("./routes/Routers"));//imp all functions in Routers
