import {NgModule} from '@angular/core';

import { ContadorComponent } from './contadorcomponents/contador.component';



@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule{}



