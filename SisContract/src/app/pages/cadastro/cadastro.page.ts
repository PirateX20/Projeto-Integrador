import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, CheckboxCustomEvent } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { EmpresaService } from 'src/app/services/empresafb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  valueCadastro: string;
  //Responsável pelos termos de uso
  isSubmitted: boolean = false
  canDismiss = false;
  presentingElement = null;

  form_cadastro: FormGroup;
  documento: string;
  checkboxes: boolean ;

  constructor(
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private _empregadoFBS: EmpregadoService,
    private _empresaFBS: EmpresaService,
    private _router : Router
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    //Termos de uso
    this.presentingElement = document.querySelector('.ion-page');
    this.form_cadastro = this.formBuilder.group({
      email: ["", [Validators.required]],
      senha: ["", [Validators.required]],
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
      //this.docTamanho();
      this.cadastrar();
    }
  }

  get errorControl(){
    return this.form_cadastro.controls;
  }

  /*onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }*/

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setDocumento(value: string){
    this.documento = value;
  }

  docTamanho(){//mudar o login pra email pelo auth
    if(this.valueCadastro.length == 11){
      this.documento = 'cpf';
    }
    if(this.valueCadastro.length == 14){
      this.documento = 'cnpj';
    }
    console.log(this.documento);
  }


  cadastrar(){
    //if(this.documento == 'cpf'){
      this._empregadoFBS.cadastroEmpregado(this.form_cadastro.value).then(()=>{
        this.presentAlert("Cadastro", "Sucesso!", "Cadastro do usuário realizado com sucesso!");
        this.form_cadastro.reset();
        this._router.navigate(["/home"]);
      })
      console.log(this.form_cadastro.value);
      /*}
      if(this.documento == 'cnpj'){
        this._empresaFBS.cadastroEmpresa(this.form_cadastro.value).then(()=>{
          this.presentAlert("Cadastro", "Sucesso!", "Cadastro da empresa realizado com sucesso!");
          this._router.navigate(["/home"]);
        });
      }*/
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
