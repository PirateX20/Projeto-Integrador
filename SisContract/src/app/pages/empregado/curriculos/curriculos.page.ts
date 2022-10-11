import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.page.html',
  styleUrls: ['./curriculos.page.scss'],
})
export class CurriculosPage implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser;
  constructor(public menuCtrl: MenuController,private _empregadoFBS: EmpregadoService, private _router: Router) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      console.log(email);
      //this.oemail = email;
    }
  }

}
