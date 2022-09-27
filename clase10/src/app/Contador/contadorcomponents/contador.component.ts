
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";

@Component({
    selector:'app-contador',
    templateUrl: './contador.component.html'
})


export class ContadorComponent{
    public titulo: string = 'Aplicación Contador';
    public numero: number = 10;
    public base: number =5;



    acumular(valor: number){
        this.numero += valor;
    }
}

