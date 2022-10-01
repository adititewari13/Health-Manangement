var express = require('express');
let bodyParser = require("body-parser");
const multer=require('multer');
var app = express();
let cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//app.use("/fetch", require("./fetch"));
app.use("/presc", require("./newprescf"));
app.use("/newpat", require("./newpatient"));
app.use("/login", require("./login"));
app.use("/register", require("./register"));
app.use("/getpresc", require("./getpresc"));
app.use("/getapt", require("./getapts"));
app.use("/newapt",require("./bookapt"));
app.use("/newrep",require("./newlabrep"));
app.use("/getLab",require("./getLabReps"));
app.use("/getdoc",require("./getdoc"));
app.use("/change",require("./change"));
//login
//register
//update
//delete

app.listen(3000);
console.log("Server Started from Port No 3000");
