import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Empregado } from 'src/app/models/empregado';
import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.page.html',
  styleUrls: ['./curriculos.page.scss'],
})
export class CurriculosPage implements OnInit {
  idCurrent: any;
  empregados:Empregado[];
  auth = getAuth();
  user = this.auth.currentUser;
  constructor(public menuCtrl: MenuController,
    private alertController: AlertController,
    private _empregadoFBS: EmpregadoService,
    private _empresaFBS: EmpresaService,
    private _router : Router) { }

  ngOnInit() {
    this.openUser();
    this.openEmpregado();
    this.menuCtrl.enable(true);
  }

  public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public results = [...this.data];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  ver(algo:any){
    console.log(algo);
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      this.idCurrent= userId;
      //console.log(userId);
    }else{
      this._router.navigate(['/home']);
    }
  }

  openEmpregado(){
    this._empregadoFBS.getEmpregados().subscribe(res=>{
      this.empregados = res.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Empregado
        }as Empregado;
      })
    })
  }
}
