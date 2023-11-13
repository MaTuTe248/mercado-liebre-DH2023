//Require Express
const express = require("express");

//Ejecucion de Express
const app = express();

//Require path
const path = require("path");

//Usando recursos estaticos
app.use(express.static("public"));

//levantando el servidor en el puerto 3000
app.listen(3030, () => console.log("Servidor Corriendo"));

//** */ Rutas a los recursos

//Ruta Raiz => Home
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
});

//Ruta Raiz => Registro
app.get("/registro", (req, res) => {
    res.sendFile(path.resolve("./views/registro.html"));
});

//Ruta Raiz => Loggin
app.get("/loggin", (req, res) => {
    res.sendFile(path.resolve("./views/loggin.html"));
});