var express = require('express');
var app = express();
var bodyParser = require('body-parser')


console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: false}))


app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json", function (req, res) {
    res.json({"message": "Hello json"})
})


app.post("/name", function (req, res) {

    res.json({
        "name": req.body.first + " " + req.body.last,
        "email": req.body.email
    })
})



























 module.exports = app;
