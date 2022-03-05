const bodyParser = require('body-parser');
var express = require('express');
var app = express();
require('dotenv').config()
console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
})


app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json", function (req, res) {

    var message = "Hello json"
    
    if (process.env.MESSAGE_STYLE == "uppercase") {
        message = message.toUpperCase()
    }
    return res.json({ "message": message })
})

app.get("/now", function (req, res, next) {
    req.time = new Date().toString()
    next()

}, function (req, res) {
    res.json({"time": req.time})
}
)

app.get("/:word/echo", function (req, res) {
    res.json({"echo": req.params.word})
})

app.route("/name").get(function (req, res) {
    res.json({"name": req.query.first + " " + req.query.last})
}).post(function (req, res) {
    res.json({ "name": req.query.first + " " + req.query.last })
})


























 module.exports = app;
