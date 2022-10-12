import { Component, OnInit } from '@angular/core';
import { Auth, getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { Empregado } from 'src/app/models/empregado';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  auth = getAuth();
  aaa:any
  user = this.auth.currentUser;
  usuario!: Empregado[];
  e:Empregado[];
  nome!:any;
  oemail:any;
  constructor(public menuCtrl: MenuController,private _empregadoFBS: EmpregadoService,private _router: Router, private _auth: Auth, ) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      console.log(email);
      this.oemail = userId;
      this._empregadoFBS.getEmpregado(this.oemail).subscribe(res=>{
        this.aaa = res;
        console.log(this.aaa.nome);
      });
      
    }
  }

  

}
