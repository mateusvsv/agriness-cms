import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { ArtigosComponent } from './artigos.component';
import { ArtigosFormComponent } from './artigos-form/artigos-form.component';
import { ArtigosService } from './artigos.service';

@NgModule({
  declarations: [
    ArtigosComponent,
    ArtigosFormComponent
  ],
  imports: [
    CommonModule,
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
