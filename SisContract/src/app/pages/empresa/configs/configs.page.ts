import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.page.html',
  styleUrls: ['./configs.page.scss'],
})
export class ConfigsPage implements OnInit {
  formConfig: FormGroup;
  checkboxes: boolean;
  auth = getAuth();
  isSubmitted: boolean
  user = this.auth.currentUser;

  constructor(private _empresaFBS: EmpresaService,
    private _router : Router,
    public menuCtrl: MenuController,
    private formBuilder: FormBuilder,private alertController:AlertController) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
    this.formConfig = this.formBuilder.group({
      email: [this.user.email],
      senha: [""],
      documento: [""],
    })
  }

  submitForm(): Boolean{
    this.isSubmitted = true;
    console.log("aqui");
    if(!this.formConfig.valid){
      this.presentAlert('Agenda', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      //this.docTamanho();
      this.alterar();
      //this.cadastrar();
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

  private alterar(){
    let aauth = getAuth();
    let uuser = aauth.currentUser;
    let id = uuser.uid
    this._empresaFBS.updateConfig(this.formConfig.value,id).then(()=>{
      this.presentAlert("Cadastro", "Sucesso!", "Cadastro do usuário realizado com sucesso!");
      this.formConfig.reset();
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

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      console.log(email);
      //this.oemail = email;
    }
  }

  private deletar(){
    let aauth = getAuth();
    let uuser = aauth.currentUser;
    let id = uuser.uid
    this._empresaFBS.deleteEmpresa(id).then(()=>{

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
