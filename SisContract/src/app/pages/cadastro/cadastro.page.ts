import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, CheckboxCustomEvent } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  //Responsável pelos termos de uso
  isSubmitted: boolean = false
  canDismiss = false;
  presentingElement = null;

  form_cadastro: FormGroup;
  documento: string = "CPF";
  checkboxes: boolean ;

  constructor(
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    //Termos de uso
    this.presentingElement = document.querySelector('.ion-page');
    this.form_cadastro = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      documento: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
    })
  }

  submitForm(): Boolean{
    this.isSubmitted = true;
    if(!this.form_cadastro.valid){
      this.presentAlert('Agenda', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      this.cadastrar();
    }
  }

  get errorControl(){
    return this.form_cadastro.controls;
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

  cadastrar(){
    console.log("isso");
    this.presentAlert("Cadastro", "Sucesso!", "Cadastro realizado com sucesso!");
  }

  alterar(){}

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
