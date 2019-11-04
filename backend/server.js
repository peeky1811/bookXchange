//including expresss, body-parser and mysql packages
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


//initialising express package
var app = express();
app.use(bodyParser.json());
app.use(cors());

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database: "abc"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
})


app.use(express.static('frontend'));

app.get('/', function(req,res) {
    con.query("SELECT * FROM students", function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
    res.send("HELLO GOPIKA AND ARUNDHATHI"+req.query.name);
});
``
app.post("/register", function(req, res) {

    con.query(`INSERT INTO register VALUES('${req.body.username}', '${req.body.password}', '${req.body.phone}', '${req.body.dept}')`, function(err,result){
        if(err) throw err;
        console.log(result);
    });
    res.send("Got");
})

app.get("/reg", function(req, res) {
    con.query(`INSERT INTO students VALUES('${req.query.username}', '${req.query.password}')`, function(err,result){
        if(err) throw err;
        console.log(result);
    });
    res.send("Recieved");
})

app.listen(3000, function(){
    console.log("Server started");
});