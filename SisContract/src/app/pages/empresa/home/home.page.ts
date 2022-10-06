import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresafb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _empresaFBS: EmpresaService,private _router: Router) { }

  ngOnInit() {
  }

  async logout(){
    await this._empresaFBS.logout();
    this._router.navigateByUrl('/',{replaceUrl:true});
  }

}
