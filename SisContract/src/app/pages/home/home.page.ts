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

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  gotoCadastrar(){
    this._route.navigate(["/cadastrar"]);
  }
  
  gotoOfflineMode(){
    this._route.navigate(["/offlineMode"]);
  }
}
