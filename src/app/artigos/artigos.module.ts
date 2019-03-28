import { AppRoutingModule } from './../app.routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { ArtigosComponent } from './artigos.component';
import { ArtigosFormComponent } from './artigos-form/artigos-form.component';
import { ArtigosService } from './artigos.service';
import { ArtigoDetalheComponent } from './artigo-detalhe/artigo-detalhe.component';

@NgModule({
  declarations: [
    ArtigosComponent,
    ArtigosFormComponent,
    ArtigoDetalheComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    EditorModule,
    FormsModule
  ],
  exports: [
    ArtigosComponent
  ],
  providers: [
    ArtigosService
  ]
})
export class ArtigosModule { }
