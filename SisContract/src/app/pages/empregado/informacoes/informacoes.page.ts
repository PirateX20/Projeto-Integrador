import { Component, OnInit } from '@angular/core';
import { getDoc, getFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAdditionalUserInfo, getAuth } from 'firebase/auth';
import { getuid } from 'process';
import { Empregado } from 'src/app/models/empregado';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {
  isSubmitted: boolean;
  formEdit: FormGroup;
  empregado:Empregado;
  idCurrent: any;
  auth = getAuth();
  user = this.auth.currentUser;

  constructor(public menuCtrl: MenuController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private _empregadoFBS: EmpregadoService,
    private _router : Router) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
    this.formEdit = this.formBuilder.group({
      nome:[""],
      endereco:[""],
      areaAtuacao:[""],
      escolaridade: [""],
      experiencia:[""],
      especializacoes:[""]
    })
  }

  async logout(){
    await this._empregadoFBS.logout();
    this._router.navigateByUrl('/',{replaceUrl:true});
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
    this._empregadoFBS.updateinfos(this.formEdit.value,this.idCurrent).then(()=>{
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
