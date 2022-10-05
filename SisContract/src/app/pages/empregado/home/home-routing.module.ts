import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadoComponentModule } from 'src/app/component/empregado/empregado.component.module';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),EmpregadoComponentModule],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
