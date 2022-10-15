import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Empresa } from 'src/app/models/empresa';
import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.page.html',
  styleUrls: ['./propostas.page.scss'],
})
export class PropostasPage implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser;
  empresas:Empresa[];
  constructor(
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private _empregadoFBS: EmpregadoService,
    private _router : Router,
    private _empresaFBS: EmpresaService
  ) {
    this.openEmpresas();
  }

  ngOnInit() {
    this.openUser();
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

    }else{
      this._router.navigate(['/home']);
    }
  }

  openEmpresas(){
    this._empresaFBS.getEmpresas().subscribe(res=>{
      this.empresas = res.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Empresa
        }as Empresa;
      })
    })
  }

}
