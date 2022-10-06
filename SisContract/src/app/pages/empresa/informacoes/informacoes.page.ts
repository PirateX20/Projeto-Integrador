import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  isSubmitted: boolean;
  //formEdit: FormGroup;
  
  constructor(public menuCtrl: MenuController,
    private alertController: AlertController,
    //private formBuilder: FormBuilder,
    private _empresaFBS: EmpresaService,
    private _router : Router) { }

  ngOnInit() {
  }

  async logout(){
    await this._empresaFBS.logout();
    this._router.navigateByUrl('/',{replaceUrl:true});
  }

  submitForm(): Boolean{
    return true;
    /*this.isSubmitted = true;
    if(!this.formEdit.valid){
      this.presentAlert('Agenda', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      //this.docTamanho();
      this.editar();
    }*/
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

  editar(){

  }

}
