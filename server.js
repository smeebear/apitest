var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 9000;

app.use(bodyParser.json());

app.get("/api/placeholder", (req, res) => {
    const output = "Hi this is Sam O";
    res.send({"outputText" : output});
});

console.log("Hi")

app.listen(port, () => console.log("API running on port 9000"));