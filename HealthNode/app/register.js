var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let adduser = express.Router().post("/",(req,res) => {
    mongodbClient.connect("mongodb://localhost:27017/", (err, client) => {
        if (err) throw err;
        var db = client.db("health");
        var data = req.body.usertype;
        db.collection(data).find({"email" : req.body.email}).toArray((err,users) =>{
            if (err) throw err;
            if(users.length >= 1) res.send({message:"User already registered"});
            else{
                db.collection(data).insertOne(req.body,(err,newuser) => {
                    if (err) throw err;
                    console.log("New User added");
                    res.send({message:"New user added",flag: 1});
                });
            }
        });        
    });
});

module.exports = adduser;