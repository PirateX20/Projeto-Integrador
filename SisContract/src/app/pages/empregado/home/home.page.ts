import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _empregadoFBS: EmpregadoService,private _router: Router) { }

  ngOnInit() {
  }

  async logout(){
    await this._empregadoFBS.logout();
    this._router.navigateByUrl('/',{replaceUrl:true});
  }

}
