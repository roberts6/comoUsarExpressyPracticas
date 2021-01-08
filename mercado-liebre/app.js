const express = require("express");
const app = express();
const path = require("path");

app.use('/static', express.static(__dirname + '/public'));

const publicPath = path.resolve(__dirname, "./mercado-liebre");

app.listen(3666, () => console.log("Funcionando en el puerto 3666"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "views/index.html")
    )});