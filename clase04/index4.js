

/*
// Elementos de consola

console.log(`Iniciamos los ejercicos en V`);
console.error(`Este es un mensaje de error`);
console.warn(`Cuidado, puede explotar la app`);
console.info(`Te informo que..`);

console.log(`===================`);

//POO
// Clase: modelo
// Objeto: una instancia de la clase

class Cliente{
    constructor(nombre, apellido, direccion){
        this.nombre= nombre;
        this.apellido= apellido;
        this.direccion= direccion;
    }

}

constructor(nombre, apellido, direccion, facebook, instagram)
{
        this.nombre= nombre;
        this.apellido= apellido;
        this.direccion= direccion;
        this.facebook=facebook;
        this.instagram=instagram;
    }


saludar()
{
    console.log(`Buenas noches, mi nombre es ${this.nombre} y mi apellido es ${this.apellido} y vivo en ${this.direccion}`);
}

pagar()
{
    console.log(`Mi deuda es de: $2000 y la pago ahora`);
}

let unCliente = new Cliente ('Mario', 'Perez', 'Mi calle 123');
let otroCliente =new Cliente ('')

unCliente.saludar();
unCliente.pagar();
unCliente.enviarDatos();

class Persona{
    constructor(nombre, apellido, direccion){
        this.nombre= nombre;
        this.apellido= apellido;
        this.direccion= direccion;
    }

}

class Empleado{
    constructor(nombre, apellido, direccion)
    {
        this.nombre= nombre;
        this.apellido= apellido;
        this.direccion= direccion;
    }
}

let personaje = {
    nombre: 'Juan',
    direccion: 'Perez',
}

//module.exports= Cliente;

*/
//FETCH: FUNCION QUE TRAE DATOS DE TIPO JASON

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    console.log(response);
    return response.json();
})
.then(users =>{
    cargarDatos(users)
})
.catch((error) =>{
    console.log(`El error es ${error}`);
    })



function cargarDatos(usuarios) {
for(const usuario of usuarios){
    let div = document.createElement ('div');
    div.innerHTML =`<p>${usuario.name} - ${usuario.email}</p>`
    document.bosy.append(div)
}
}
