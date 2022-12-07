const mysql = require("mysql2");
const express = require("express");
// const bodyParser = require("body-parser");
// const encoder = bodyParser.urlencoded();

const route = express.Router();
//app.use("/assets",express.static("assets"));


const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "9518547379#m",
    database: "cointab"
});



route.post("/login", function(req,res){
    try{
        console.log(req.body)
        var username = req.body.email;
        var password = req.body.password;

    connection.query("select * from loginuser where email = ? and user_pass = ?",[username,password],function(error,results){
        
        if (results.length > 0) {
            console.log(results)
            res.send({status:true});
        } else {
            res.send({status:false})
        }
        
    })
    }catch(err){
        res.send(err);
    }
})

module.exports = route;

