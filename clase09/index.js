"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
console.log('Bienvenidos a TSC');
var importar_1 = require("./importar");
//1. Variables
var nombre = 'Agus';
var persona = 25;
var ganar = false;
console.log("".concat(nombre, " - ").concat(persona, " - ").concat(ganar));
// Objetos de TS
var Persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Buenos Aires',
    damedireccion: function () {
        console.log("Mi direcci\u00F3n es ".concat(Persona.ciudad));
    }
};
// Agrego info faltante 
Persona.provincia = 'Cordoba';
console.table(Persona);
console.log(Persona.damedireccion());
// Arreglos y Arrays
var habilidades = ['Cocinar', 'Cantar'];
habilidades.push('Jugar');
for (var i = 0; i < habilidades.length; i++) {
    console.log(habilidades[i]);
}
// Funciones
function Sumar(a, b) {
    return a * b;
}
;
var resultado = Sumar(1, 2);
console.log("El resultado es ".concat(resultado));
// Funciones Flechas
var flecha = function (a, b) {
    return a + b;
};
var resultadoflecha = flecha(1, 2);
console.log("El resultado es ".concat(resultadoflecha));
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
var clima = 'cálido';
var Juan = new importar_1.Empleado('Juan', 30);
Juan.imprimirNombre();
Juan.imprimirEdad();
console.log(importar_1.Empleado.apodo);
console.log(Math.PI);
// Otra forma de crear una clase con constructor
var Alumnos = /** @class */ (function () {
    function Alumnos(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Alumnos;
}());
var Lucas = new Alumnos('Lucas', 20);
var Jefe = /** @class */ (function (_super) {
    __extends(Jefe, _super);
    function Jefe(nombre, edad, cargo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.cargo = cargo;
        return _this;
    }
    Jefe.prototype.controlPresupuesto = function () {
        console.log("El presupuesto es de");
    };
    return Jefe;
}(importar_1.Empleado));
var Silvi = new Jefe('Silvi', 20, 'Administrador');
console.log(Juan);
console.log(Lucas);
console.log(Silvi);
