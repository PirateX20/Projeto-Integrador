import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperarSenhaEmpregadoPage } from './recuperar-senha-empregado.page';

describe('RecuperarSenhaEmpregadoPage', () => {
  let component: RecuperarSenhaEmpregadoPage;
  let fixture: ComponentFixture<RecuperarSenhaEmpregadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarSenhaEmpregadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarSenhaEmpregadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
