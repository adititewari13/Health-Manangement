var express = require('express');
let bodyParser = require("body-parser");
let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let getuser = express.Router().post("/",(req,res) => {
    mongodbClient.connect("mongodb://localhost:27017/", (err, client) => {
        if (err) throw err;
        var db = client.db("health");
        db.collection(req.body.usertype).find({"email" : req.body.email}).toArray((err,user) =>{
            if (err) throw err;
            console.log(req.body.password);
            if(user.length > 0){
                if(req.body.password === user[0].password){
                    console.log("Login Successful");
                    res.send({message:"Login Successful",flag:1});
                }
                else{
                    res.send({message:"Password Mismatch!!Login Failed",flag:0});
                    console.log("Log in Failed");
                }
            }
            else{
                res.send({message:"User not Found"});
            }
            
        });
        
    });
        
});

module.exports = getuser;