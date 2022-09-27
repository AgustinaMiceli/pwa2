
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './compartir/footer/footer.component';
import { HeaderComponet } from './compartir/header/header.component';
import { MainComponent } from './paginas/main/main.component';
import { AboutComponent } from './paginas/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponet,
    FooterComponent,
    MainComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
