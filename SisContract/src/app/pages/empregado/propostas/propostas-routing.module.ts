import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropostasPage } from './propostas.page';

const routes: Routes = [
  {
    path: '',
    component: PropostasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropostasPageRoutingModule {}
