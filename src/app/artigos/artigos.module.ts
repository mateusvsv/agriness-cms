import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtigosComponent } from './artigos.component';
import { ArtigosService } from './artigos.service';

@NgModule({
  declarations: [
    ArtigosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtigosComponent
  ],
  providers: [
    ArtigosService
  ]
})
export class ArtigosModule { }
