import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmpresaComponent } from './empresa.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
    ],
    declarations: [EmpresaComponent],
    exports: [EmpresaComponent]
  })
export class EmpresaComponentModule { }
