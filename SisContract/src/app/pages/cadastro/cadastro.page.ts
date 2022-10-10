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
  checkboxes: boolean = false ;

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
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(6)]],
      nome: ["", [Validators.required]],
      documento: ["", [Validators.required,Validators.minLength(11), Validators.maxLength(14)/*,Validators.pattern['0-9']*/]],
    })
  }

  get email(){
    return this.form_cadastro.get('email');
  }

  get senha(){
    return this.form_cadastro.get('senha');
  }

  async register(){
    let registo = this._empregadoFBS.registerFB(this.form_cadastro.value)
    if(registo){
      this.presentAlert('SisContract','cadastrou','aaaaaaa.');
      this._router.navigate(['/home']);
    }else{
      this.presentAlert('SisContract','falha no cadastro','Tente novamente.');
    }
  }

  submitForm(): Boolean{
    this.isSubmitted = true;
    console.log("aqui");
    if(!this.form_cadastro.valid || !this.documento || !this.checkboxes){
      this.presentAlert('Agenda', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      //this.docTamanho();
      this.register();
      //this.cadastrar();
    }
  }

  get errorControl(){
    return this.form_cadastro.controls;
  }

  /*onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }*/

  addValue(event){
    if(event.detail.checked){
      this.checkboxes = true;
      console.log(this.checkboxes);
    }else{
      this.checkboxes = false;
      console.log(this.checkboxes);
    }
  }

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setDocumento(value: string){
    this.documento = value;
  }

  radioGroupFisica(){
    this.documento = "cpf";
  }

  radioGroupJuridica(){
    this.documento = "cnpj";
  }

  cadastrar(){
    if(this.documento == 'cpf'){
      this._empregadoFBS.cadastroEmpregado(this.form_cadastro.value).then(()=>{
        this.presentAlert("Cadastro", "Sucesso!", "Cadastro do usuário realizado com sucesso!");
        this.register();
        this.form_cadastro.reset();
        this._router.navigateByUrl('/',{replaceUrl:true})
      })
      }
      if(this.documento == 'cnpj'){
        this._empresaFBS.cadastroEmpresa(this.form_cadastro.value).then(()=>{
          this.presentAlert("Cadastro", "Sucesso!", "Cadastro da empresa realizado com sucesso!");
          this._router.navigate(["/home"]);
        });
      }
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
