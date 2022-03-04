var express = require('express');
var app = express();
require('dotenv').config()
console.log("Hello World")
console.log(process.env.MESSAGE_STYLE)

app.use("/public", express.static(__dirname + "/public"))


app.get("/", function (req, res) {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json", function (req, res) {

    var message = "Hello json"
    
    if (process.env.MESSAGE_STYLE = "uppercase") {
        message = message.toUpperCase()
        res.json({ "message": message })
        return
    } else {
        res.json({ "message": message })
        return
    }
        
   
   
})




























 module.exports = app;
