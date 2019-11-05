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
    database: "register"
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
app.get("/register", function(req, res) {

    con.query(`INSERT INTO students VALUES('${req.query.username}', '${req.query.password}', '${req.query.phone}', '${req.query.dept}')`, function(err,result){
        if(err)
            throw err;
        
        console.log(result);
    }
    res.send("Got");
})
app.get("/login", function(req, res){
    con.query(`SELECT * FROM students WHERE username='${req.query.username}' AND password='${req.query.password}'`,function(err, result){
        if(err)
            throw err;

        console.log(result);
    }
    res.send("Success");
})

app.listen(3000, function(){
    console.log("Server started");
});