
const express = require('express');
const res = require('express/lib/response');
require ('dotenv').config();
const path =require('path');
const PORT = process.env.PORT || 8080;
const app = express();

const routesProductos = require('./routes/routerProductos');

//Middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));

//Configutaracion a Motores de Plantillas

//Rutas
app.use('api/productos', routesProductos);


app.get('/', (req,res) => {
    res.send(`Bienvenido a la App Producto`)
});

app.listen(PORT, () => {
    console.log(`App trabajando en el puerto ${PORT}`);
});
