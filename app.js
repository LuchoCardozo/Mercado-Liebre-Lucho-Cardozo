const express = require ("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));

app.listen(  process.env.PORT ||   3000,()=> {
    console.log("el servidor esta corriendo en el puerto 3000")
});

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
});

app.get("/creatucuenta", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
});

app.get("/ingresa", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
});




//npm i -D nodemon   para instalar
//npx nodemon  app    para ejecutar