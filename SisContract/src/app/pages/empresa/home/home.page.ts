import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  idCurrent: any;
  auth = getAuth();
  user = this.auth.currentUser;
  constructor(public menuCtrl: MenuController,private _empresaFBS: EmpresaService,private _router: Router) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
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
