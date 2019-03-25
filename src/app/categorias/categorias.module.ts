import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriasComponent } from './categorias.component';

@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CategoriasComponent]
})
export class CategoriasModule { }
