import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarSenhaEmpregadoPage } from './recuperar-senha-empregado.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarSenhaEmpregadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarSenhaEmpregadoPageRoutingModule {}
