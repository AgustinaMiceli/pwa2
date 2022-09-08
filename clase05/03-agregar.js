

const fs= require('fs');

fs.appendFileSync('./miArchivo.txt', 'Este contenido lo agrego al texto existente en el archivo');

const data = 'Agregar datos con un callback\n';
fs.appendFile('./miArchivo.txt', `${data}`, (error ) => {
if (error) {
    console.log(error);
}else{
console.log('data', data);
}
});


// Esto es un callback: funcion que recibe como parametro a otra funcion y la ejecuta

function miFuncion (callback){
    callback()
};

function escribir(){
    console.log ('Hola, soy una función');

}

miFuncion(escribir)