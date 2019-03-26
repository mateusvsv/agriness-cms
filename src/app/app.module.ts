import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ArtigosModule } from './artigos/artigos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { CategoriasService } from './categorias/categorias.service';
import { ArtigosService } from './artigos/artigos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ArtigosModule,
    CategoriasModule
  ],
  providers: [CategoriasService, ArtigosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
