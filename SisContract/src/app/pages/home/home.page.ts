import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private _route : Router,private activatedRoute: ActivatedRoute, public menuCtrl: MenuController) {
  }

  //login por cpf e cnpj, ver quantidade de numeros ... cpf 11 - cnpj 14

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  gotoCadastrar(){
    this._route.navigate(["/cadastro"]);
  }
  
  gotoOfflineMode(){
    console.log("off man");
    //this._route.navigate(["/offlineMode"]);
  }

  authLogin(){
    console.log("logou man");
  }
}
