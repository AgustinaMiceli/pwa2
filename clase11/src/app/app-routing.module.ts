
import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { MainComponent } from './paginas/main/main.component';
import { AboutComponent } from './paginas/about/about.component';


const routes: Routes = [
    {path: 'about', component: AboutComponent},
    { path: 'main', component: MainComponent},
    { path: '**', pathMatch:'full', redirectTo: 'main'}
]





@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}