import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.page.html',
  styleUrls: ['./curriculos.page.scss'],
})
export class CurriculosPage implements OnInit {

  auth = getAuth();
  submeter:boolean;
  modelo:any;
  user = this.auth.currentUser;
  constructor(public menuCtrl: MenuController,private _empregadoFBS: EmpregadoService, private _router: Router,private alertController: AlertController) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      //console.log(email);
      //this.oemail = email;
    }else{
      this._router.navigate(['/home']);
    }
  }

  curriculoModelo1(){
    this.modelo=1;
  }

  curriculoModelo2(){
    this.modelo=2;
  }

  criaCurriculo(){

    if(this.modelo==1){
      this._router.navigate(['/modelo1']);
    }else{
      if(this.modelo==2){
        this._router.navigate(['/modelo2']);
      }else{
        this.presentAlert("SisContract", "erro", "Escolha um modelo.");
      }
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

}
