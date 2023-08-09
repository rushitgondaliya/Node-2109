const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");




const express = require("express")
const app = express()
app.listen(8080,console.log('ok'));

// var http = require('http');
// http.createServer(function(req , res){
//     res.write('rushit');
//     res.end();
// }).listen(8080);