var express=require("express");
let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;
const multer=require("multer");
var fn="";
const upload = multer({
    storage:multer.diskStorage({


    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        fn=file.fieldname + '-' + Date.now() + ".pdf";
      cb(null, fn);
      console.log(fn);
    }
})
  })
  

  


let newprsec = express.Router().post("/", upload.single('file'),(req, res) => {
    mongodbClient.connect("mongodb://localhost:27017/", (err, client) => {
        console.log("Snet");
        
        if (err) throw err; 
        else {
            var db = client.db("health");
            req.body.file_name="http://127.0.0.1:8887/"+fn;
            db.collection("labreps").insertOne(req.body, function (err, res) {
                
                console.log( "file"+req.body.file_name);
                if (err) throw err;
                console.log("1 document inserted");
                client.close();
            });
            db.collection("labreps").find({}).toArray((err, emp) => {
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