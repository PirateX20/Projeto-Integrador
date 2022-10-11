import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {
  idCurrent: any;
  auth = getAuth();
  user = this.auth.currentUser;
  isSubmitted: boolean;
  formEdit: FormGroup;
  
  constructor(public menuCtrl: MenuController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private _empresaFBS: EmpresaService,
    private _router : Router) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
    this.formEdit = this.formBuilder.group({
      nome:[""],
      endereco:[""],
      cargos:[""]
    })

  }

  submitForm(): Boolean{
    this.isSubmitted = true;
    if(!this.formEdit.valid){
      this.presentAlert('Agenda', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      //this.docTamanho();
      this.editar();
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

  editar(){
    this._empresaFBS.updateInfos(this.formEdit.value,this.idCurrent).then(()=>{
      this.presentAlert("SisContract", "Informações", "Informações alteradas com sucesso!");
      this.formEdit.reset();
    })
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      this.idCurrent= userId;
      console.log(userId);
    }
  }

}
