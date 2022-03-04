var express = require('express');
var app = express();
require('dotenv').config()
console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"))


app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json", function (req, res) {
    const messageStyle = process.env['MESSAGE_STYLE']

    var message = "Hello json"
    
    if (messageStyle = "uppercase") {
        message = message.toUpperCase()
    }
    console.log("responding")
    return res.json({ "message": message })
})




























 module.exports = app;
