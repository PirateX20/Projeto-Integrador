import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.page.html',
  styleUrls: ['./configs.page.scss'],
})
export class ConfigsPage implements OnInit {

  checkboxes: boolean;

  constructor(private _empresaFBS: EmpresaService,
    private _router : Router) { }

  ngOnInit() {
  }

  async logout(){
    await this._empresaFBS.logout();
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
