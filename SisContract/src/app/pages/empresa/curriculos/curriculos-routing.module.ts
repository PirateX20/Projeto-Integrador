import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculosPage } from './curriculos.page';

const routes: Routes = [
  {
    path: '',
    component: CurriculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculosPageRoutingModule {}
