import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.page.html',
  styleUrls: ['./configs.page.scss'],
})
export class ConfigsPage implements OnInit {

  checkboxes: boolean;

  constructor(private _empregadoFBS: EmpregadoService,
    private _router : Router) { }

  ngOnInit() {
  }

  async logout(){
    await this._empregadoFBS.logout();
    this._router.navigateByUrl('/',{replaceUrl:true});
  }

  addValue(event){
    if(event.detail.checked){
      this.checkboxes = true;
      console.log(this.checkboxes);
    }else{
      this.checkboxes = false;
      console.log(this.checkboxes);
    }
  }

}
