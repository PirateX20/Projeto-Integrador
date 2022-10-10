import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigsPageRoutingModule } from './configs-routing.module';

import { ConfigsPage } from './configs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConfigsPageRoutingModule
  ],
  declarations: [ConfigsPage]
})
export class ConfigsPageModule {}
