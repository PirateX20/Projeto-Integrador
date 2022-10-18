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
    private alertController: AlertController) {
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  gotoCadastrar(){
    this._route.navigate(["/cadastro"]);
  }

  gotoEmpregado(){
    this._route.navigate(["/empregadologin"]);
  }

  gotoEmpresa(){
    this._route.navigate(["/empresalogin"]);
  }
  
  /*gotoOfflineMode(){
    this._route.navigate(["/empregadohome"]);
  }*/

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
