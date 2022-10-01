var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let chng = express.Router().post("/",(req,res) => {
    mongodbClient.connect("mongodb://localhost:27017/", (err, client) => {
        if (err) throw err;
        var db = client.db("health");
        var data = req.body.usertype;
        db.collection(data).findOne({email:req.body.email},(err,user) =>{
            if(err) throw err;
            if(user){
                db.collection(data).updateOne({email : req.body.email},{$set:{password:req.body.password}},(err,users) =>{
                    if (err) throw err;
                    res.send({message:"Your Password is Updated",flag:1});
                });
            }
            else{
                res.send({message:"User is not registered",flag:0});
            }
        })        
    });
});

module.exports = chng;