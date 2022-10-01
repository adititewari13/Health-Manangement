var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let newprsec = express.Router().post("/", (req, res) => {
    mongodbClient.connect("mongodb://localhost:27017/", (err, client) => {
        if (err) throw err; 
        else {
            var db = client.db("health");
            db.collection("appointment").insertOne(req.body, function (err, res) {
                if (err) throw err;
                console.log("1 apt document inserted");
                client.close();
            });
            db.collection("appointment").find({}).toArray((err, emp) => {
                if (err) {
                    throw err;
                } else {
                    res.json(emp);
                    return;
                }
            });
        }
    });
});

module.exports = newprsec;