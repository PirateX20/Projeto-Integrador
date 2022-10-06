import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.page.html',
  styleUrls: ['./propostas.page.scss'],
})
export class PropostasPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    private alertController: AlertController,
    private _empregadoFBS: EmpregadoService,
    private _router : Router) { }

  ngOnInit() {
  }

  public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public results = [...this.data];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  async logout(){
    await this._empregadoFBS.logout();
    this._router.navigateByUrl('/',{replaceUrl:true});
  }

  ver(algo:any){
    console.log(algo);
  }

}
