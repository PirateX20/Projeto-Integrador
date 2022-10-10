import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculosPageRoutingModule } from './curriculos-routing.module';

import { CurriculosPage } from './curriculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculosPageRoutingModule
  ],
  declarations: [CurriculosPage]
})
export class CurriculosPageModule {}
