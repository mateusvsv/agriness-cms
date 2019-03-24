import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtigosComponent } from './artigos/artigos.component';

const APP_ROUTES: Routes = [
  { path: '', component: ArtigosComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
