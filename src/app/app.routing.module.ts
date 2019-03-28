import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtigosComponent } from './artigos/artigos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ArtigosFormComponent } from './artigos/artigos-form/artigos-form.component';
import { ArtigoDetalheComponent } from './artigos/artigo-detalhe/artigo-detalhe.component';

const APP_ROUTES: Routes = [
  { path: '', component: ArtigosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'escrever-artigo', component: ArtigosFormComponent },
  { path: 'artigo/:id', component: ArtigoDetalheComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
