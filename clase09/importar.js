"use strict";
exports.__esModule = true;
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Empleado.prototype.imprimirNombre = function () {
        console.log("Mi nombre es ".concat(this.nombre));
    };
    Empleado.prototype.imprimirEdad = function () {
        console.log("Mi edad es ".concat(this.edad));
    };
    Empleado.apodo = 'Chiqui'; // static: no depende del objeto si no de la clase
    return Empleado;
}());
exports.Empleado = Empleado;
