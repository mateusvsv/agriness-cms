import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtigosComponent } from './artigos/artigos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ArtigosFormComponent } from './artigos/artigos-form/artigos-form.component';

const APP_ROUTES: Routes = [
  { path: '', component: ArtigosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'escrever-artigo', component: ArtigosFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
