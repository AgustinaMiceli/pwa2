import {Empleado} from './importar';
import {salario} from './importar';

console.log('Bienvenidos a TSC');

//1. Variables
let nombre: string= 'Agus';
let persona: string | number=25;
let ganar: boolean =false;

console.log(`${nombre} - ${persona} - ${ganar}`);


//2. Interfaces: Intermediario que crea un modelo especifico de datos
interface cliente{
    nombre: string;
    edad: number;
    ciudad:string;
    provincia?: string; // si pongo ? es porque es optativo
    damedireccion(): void; 
}

// Objetos de TS
const Persona: cliente = {
    nombre: 'Juan',
    edad: 25, 
    ciudad: 'Buenos Aires',
    damedireccion: () => {
        console.log(`Mi dirección es ${Persona.ciudad}`);
    }
}

// Agrego info faltante 
Persona.provincia = 'Cordoba';

console.table(Persona);
console.log(Persona.damedireccion());

// Arreglos y Arrays
let habilidades: string[] = ['Cocinar', 'Cantar'];
habilidades.push('Jugar');

for (let i = 0; i < habilidades.length;  i++) {
    console.log(habilidades[i]);
}

// Funciones
function Sumar(a: number, b: number): number {
    return a*b
};

const resultado = Sumar(1,2);
console.log(`El resultado es ${resultado}`);

// Funciones Flechas
const flecha= (a: number, b: number) => {
    return a+b
}

const resultadoflecha = flecha(1,2);
console.log(`El resultado es ${resultadoflecha}`);

// Clases
/*class Empleado{ 

    public nombre: string; // solo tiene acceso a la clase
    public edad: number; // tiene acceso en todas partes
    static apodo: string = 'Chiqui'; // static: no depende del objeto si no de la clase

    constructor(nombre:string, edad: number){// el constructor se usa cuando quiero caracteristicas especificas
        this.nombre= nombre;
        this.edad= edad;
    } 

imprimirNombre(){
    console.log(`Mi nombre es ${this.nombre}`);
}

imprimirEdad(){
    console.log(`Mi edad es ${this.edad}`);
}
}*/

const clima: string = 'cálido';


const Juan = new Empleado('Juan', 30);


Juan.imprimirNombre();
Juan.imprimirEdad();


console.log(Empleado.apodo);

console.log(Math.PI);




// Otra forma de crear una clase con constructor
class Alumnos{ 
        constructor(
        public nombre:string, 
        public edad: number
        ){}
}

const Lucas = new Alumnos('Lucas',20);


class Jefe extends Empleado{ 
    constructor( 
    public nombre: string,
    public edad: number,
    public cargo: string,
    
    ){
        super(nombre, edad)
    }

    controlPresupuesto(){
        console.log(`El presupuesto es de`);
        
    }
}

const Silvi = new Jefe('Silvi', 20, 'Administrador');


console.log(Juan);
console.log(Lucas);
console.log(Silvi);


