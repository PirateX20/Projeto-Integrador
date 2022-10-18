import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarSenhaEmpregadoPageRoutingModule } from './recuperar-senha-empregado-routing.module';

import { RecuperarSenhaEmpregadoPage } from './recuperar-senha-empregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RecuperarSenhaEmpregadoPageRoutingModule
  ],
  declarations: [RecuperarSenhaEmpregadoPage]
})
export class RecuperarSenhaEmpregadoPageModule {}
