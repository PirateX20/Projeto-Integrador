import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modelo1PageRoutingModule } from './modelo1-routing.module';

import { Modelo1Page } from './modelo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modelo1PageRoutingModule
  ],
  declarations: [Modelo1Page]
})
export class Modelo1PageModule {}
