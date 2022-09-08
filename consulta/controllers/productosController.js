const knex= require('../db/conexion'); const { default: knex } = require("knex");

const formularioProducto = (req, res) => {
    res.send(`Te envío el formulario para que lo completes`)
}
// cuando quiera hacer el front es res.render() en vez de res.send

const selectProducto= (req, res) => {
    knex.select('*')
    .from('productos')
    .then((response) => {
        for(row of response) {
        console.log(`${row['nombre']} - ${row['descripción']}`);
    }
    res.send(`Te muestro los productos`);
    })
    .catch((error) => {
            console.log(`${error}`);
    })
    .finally(() => {
        console.log(`Cerrando conexion a Base de Datos`);
        knex.destroy()   
    })
}

const crearProducto = (req, res) => {

   //Traemos las variables
const {nombre, descripción, stock, precio} =req.body;

   //Hacer alguna validacion

if(nombre == '' || descripción == '' || stock == '' || precio == ''){
    res.send(`Por favor llegar las caracteristicas del Producto`)
} else {
    knex('productos').insert({
        nombre, 
        descripción,
        stock,
        precio
    }).then(() => {
        res.send(`Producto creado con los datos: ${nombre} - ${descripción} - ${stock} - ${precio}`);
    }).catch (error => {
        throw error
    }).finally (() => {
        console.log(`Cerrando conexion a Base de Datos`);
        knex.destroy()
    })
}   
}

module.exports={
    formularioProducto,
    selectProducto,
    crearProducto
}

