import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  documento: string = "CPF";
  checkboxes: boolean ;

  constructor(public menuCtrl: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  cadastrar(){
    console.log("isso");
    this.presentAlert("Cadastro", "Sucesso!", "Cadastro realizado com sucesso!");
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
