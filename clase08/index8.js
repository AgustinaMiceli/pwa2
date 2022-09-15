const app = require('./server');
const { PORT } = require('./config/mongo.js');
const {getConnection} = require('./db/conexion');

getConnection().then ((mensaje) =>{
console.log(mensaje);
}).catch(console.log('Conexión Realizada'));

app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en el Puerto ${PORT}`);
});


//const sql = require('./config/sql);
//const PORT =3000


/* Conectar a la base de datos y levantar la app y toda la configuracion va a estar en server.js*/



