var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;


// Checks and returns the user data based on the correct email and password combination...
let login = express.Router().get("/:email", (req, res) => {
     arr=[];
    mongodbClient.connect("mongodb://localhost:27017/health", (err, client) => {
        if (err) {
            throw err;
        } else {
            var db = client.db("health");
            db.collection("appointment").find({}).toArray((err, emp) => {
                if (err) {
                    throw err;
                } else {
                    console.log(req.params.email);
                    for (let i = 0; i < emp.length; i++) {
                        if (emp[i].doc_email == req.params.email && new Date().toISOString().slice(0, 10) == emp[i].date ) {
                            arr.push(emp[i]);
                            console.log("its a match");
                        }
                    }
                    res.json(arr);
                            return;

                    res.json("INVALID CREDENTIALS!!!");
                }
            });
        }
    });
});

module.exports = login;



