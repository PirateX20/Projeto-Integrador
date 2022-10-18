import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { jsPDF } from 'jspdf';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-modelo2',
  templateUrl: './modelo2.page.html',
  styleUrls: ['./modelo2.page.scss'],
})
export class Modelo2Page implements OnInit {
  @ViewChild('corpo',{static:false}) el:ElementRef;
  auth = getAuth();
  user = this.auth.currentUser;
  usuario:any;
  constructor(public menuCtrl: MenuController,private _router: Router, private _empregadoFBS:EmpregadoService) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(false);
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      //console.log(email);
      this._empregadoFBS.getEmpregado(userId).subscribe(res=>{
        this.usuario = res;
        //console.log(this.empregado.nome);
      });
      //this.oemail = email;
    }else{
      //this._router.navigate(['/home']);
    }
  }

  download(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("curriculo.pdf");
      }
    })
  }

  back(){
    this._router.navigate(['/empregadocurriculos']);
  }

}
