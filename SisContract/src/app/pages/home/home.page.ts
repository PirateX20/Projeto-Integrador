import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private _route : Router,
    private activatedRoute: ActivatedRoute, 
    public menuCtrl: MenuController) {
  }
  cpf_cnpj: number;
  decimal_Section: string = '.';
  confirm_digit: string = '-';
  second_partCNPJ: string = '/';

  //login por cpf e cnpj, ver quantidade de numeros ... cpf 11 - cnpj 14

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  gotoCadastrar(){
    this._route.navigate(["/cadastro"]);
  }
  
  gotoOfflineMode(){
    this._route.navigate(["/offline"]);
  }

  authLogin(){
    console.log("logou man, Gzus was here");
  }
}
