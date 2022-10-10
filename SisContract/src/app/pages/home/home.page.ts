import { Component,OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //
  constructor(
    private _route : Router,
    private activatedRoute: ActivatedRoute, 
    public menuCtrl: MenuController,
    private _auth : Auth,
    private _empregadoFBS : EmpregadoService,
    private _empresaFBS : EmpresaService,
    private alertController: AlertController,
    private formBuilder : FormBuilder,
    private _router: Router) {
  }
  cpf_cnpj: number;
  isSubmitted: boolean;
  decimal_Section: string = '.';
  confirm_digit: string = '-';
  second_partCNPJ: string = '/';
  form_login: FormGroup;

  //login por cpf e cnpj, ver quantidade de numeros ... cpf 11 - cnpj 14

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.form_login = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]],
    })
  }

  get errorControl(){
    return this.form_login.controls;
  }

  gotoCadastrar(){
    this._route.navigate(["/cadastro"]);
  }
  
  gotoOfflineMode(){
    this._route.navigate(["/empregadohome"]);
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.form_login.valid){
      this.presentAlert('Agenda', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      //this.docTamanho();
      this.authLogin();
    }
  }

  async authLogin(){
    this._empregadoFBS.loginFB(this.form_login.controls['email'].value,this.form_login.controls['senha'].value).then((credenciais)=>{
      const uuser = credenciais.user;
      console.log(uuser);
      this._router.navigate(['/empregadohome']);
    }).catch((err)=>{
      console.log(err);
      this.presentAlert('SisContract','falha no cadastro','Tente novamente.');
    })

    
  }

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
