import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Empregado } from 'src/app/models/empregado';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.page.html',
  styleUrls: ['./configs.page.scss'],
})
export class ConfigsPage implements OnInit {
  auth = getAuth();
  isSubmitted: boolean
  user = this.auth.currentUser;
  checkboxes: boolean;
  formConfig: FormGroup;
  empregado:any;

  constructor(public menuCtrl: MenuController,private _empregadoFBS: EmpregadoService,
    private _router : Router,private formBuilder: FormBuilder,private alertController:AlertController) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
    this.formConfig = this.formBuilder.group({
      email: ["",[Validators.required,Validators.email]],
      senha: ["",[Validators.required,Validators.minLength(6)]],
      documento: ["",[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
    })
  }

  submitForm(): Boolean{
    this.isSubmitted = true;
    console.log("aqui");
    if(!this.formConfig.valid){
      this.presentAlert('Agenda', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      this.alterar();
    }
  }

  addValue(event){
    if(event.detail.checked){
      this.checkboxes = true;
      console.log(this.checkboxes);
    }else{
      this.checkboxes = false;
      console.log(this.checkboxes);
    }
  }

  openUser(){
    if(this.user !== null){
      const userId = this.user.uid
      this._empregadoFBS.getEmpregado(userId).subscribe(res=>{
        this.empregado = res;
        this.formConfig.controls['email'].setValue(this.empregado.email);
        this.formConfig.controls['senha'].setValue(this.empregado.senha);
        this.formConfig.controls['documento'].setValue(this.empregado.documento);
        
        //console.log(this.empregado.nome);
      });
    }else{
      this._router.navigate(['/home']);
    }
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

  private alterar(){
    let aauth = getAuth();
    let uuser = aauth.currentUser;
    let id = uuser.uid
    this._empregadoFBS.updateConfig(this.formConfig.value,id).then(()=>{
      this.presentAlert("Cadastro", "Sucesso!", "Cadastro do usuário realizado com sucesso!");
      this.formConfig.reset();
    })
  }

  private deletar(){
    let aauth = getAuth();
    let uuser = aauth.currentUser;
    let id = uuser.uid
    this._empregadoFBS.deleteEmpregado(id).then(()=>{
      this.presentAlert("SisContract", "Sucesso!", "Conta Excluida");
    })
  }

  excluir(){
    this.presentAlertConfirm("SisContract","Excluir Conta","Você deseja excluir sua Conta?");
  }

  async presentAlertConfirm(cabecalho : string, subcabecalho : string,msg: string) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: msg,
      buttons: [
        {
          text:'Cancelar',
          role:'cancelar',
          cssClass:'secondary',
          handler: ()=>{this._router.navigate(["/empresahome"])}
        },{
          text:'Confimar',
          handler: ()=>{this.deletar()}
        }
      ],
    });

    await alert.present();
  }

}
