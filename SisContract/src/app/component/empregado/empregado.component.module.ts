import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmpregadoComponent } from './empregado.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
    ],
    declarations: [EmpregadoComponent],
    exports: [EmpregadoComponent],
  })
export class EmpregadoComponentModule{}