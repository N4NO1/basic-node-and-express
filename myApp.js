var express = require('express');
var app = express();
var MESSAGE_STYLE = require("dotenv").config()

console.log(MESSAGE_STYLE)
console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"))


app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json", function (req, res) {
    var message = "Hello json"
    if (MESSAGE_STYLE = "uppercase") {
        message.toUpperCase()
    }
   res.json({ "message": message })
})




























 module.exports = app;
