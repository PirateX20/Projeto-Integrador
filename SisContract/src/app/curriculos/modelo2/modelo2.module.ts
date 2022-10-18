import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modelo2PageRoutingModule } from './modelo2-routing.module';

import { Modelo2Page } from './modelo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modelo2PageRoutingModule
  ],
  declarations: [Modelo2Page]
})
export class Modelo2PageModule {}
