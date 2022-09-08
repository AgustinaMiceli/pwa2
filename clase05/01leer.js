

// Cons archivos trabajamos con modulos nativos de Node.js
// Vamos a trabajar con el modulo "file system" de Node Js


const fs = require('fs');

const data= fs.readFileSync('./archivo.txt', 'utf-8');

console.log(data); 

console.log('==================================');
console.log('==================================');

// Con manejo de errores Try - Catch
try {
    let datos = fs.readFileSync('./archivo.txt', 'utf-8');
    console.log(datos);
    } catch (error) {
        console.log('error:', error)
    
}