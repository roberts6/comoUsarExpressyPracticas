const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./practicasVarias");

app.listen(3666, () => console.log("Funcionando en el puerto 3666"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "views/home.html")
    )});