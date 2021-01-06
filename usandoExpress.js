const express = require("express");
// después de haber generado un proyecto con npm init -y y luego haber instalado express mediante npm install express --save
// ahora lo que hicimos es generar una variable que ejecute express

const app = express();
// esta variable constante lo que hace es ejecutar express

app.use(express.static('public')); 
//aquí lo que vamos a indicar es que sirva imágenes, archivos CSS, y archivos JavaScript desde un directorio nombrado 'public' al mismo nivel desde donde llama a node:

//console.log(app);


app.listen(3000, () => console.log("El proceso fue exitoso"));
// este método pone a correr el servidor. Primero vamos a indicar el puerto y luego, de forma optativa, una función.
// para probar puedo entrar al navegador y tipear localhost:3000

/*usandoExpress.get("/", function(req, res){
res.send("Bienvenido Oscar");
});*/

app.get("/contacto", function(req, res){
    res.send("Nuestra dirección de correo es: ...");
    });

    app.get("/un-array", function(req, res){
        res.send([1,2,3,4]);
        });


        app.get("/un-objeto", function(req, res){
            res.send({name: "Oscar"});
            });

// app.get lo que hace es montar una ruta que responde a la petición del cliente. Por ejemplo "/" dirige a la raiz de nuestro sitio, "/contacto" a la página de contacto y así sucesivamente.
// el segundo parámetro es agregar una función. Esta lo que va a hacer es accionar una consecuencia al pedido del cliente.


/* este es un ejemplo de cómo podría enviar una variable que consta de un objeto con propiedades

const express = require('express');
const app = express();

let producto = ({tipoProducto: null, precio: null, cantidad: null});

app.get("/producto/agregar",function (req,res){
    res.send(producto);
}); */

// res.send() no es lo más adecuado si queremos enviar alguna estructura má compleja, por esta razón express nos provee de res.sendFile(aquí va la ruta de dónde se encuentra el archivo que queremos subir. Ej: )

const path = require ('path');

usandoExpress.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./index.html")
    )});
//el ejemplo anterior es CLAVE para entender cómo llamar desde js un archivo html. Esta parte res.sendFile(path.join(__dirname, "la ruta del archivo") 
