
export interface salario{
    nombre: string;
    monto: number;

}


 export class Empleado{ 

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
}