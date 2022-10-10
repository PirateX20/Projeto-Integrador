import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Empregado } from './models/empregado';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages :any;
  public tipo: string = 'f';
  empregado:Empregado;
  constructor(private _router:Router) {

  }

  ngOnInit(){
    if(this.tipo=='f'){
      this.appPages = [
        { title: 'Home', url: '/empregadohome', icon: 'home' },
        { title: 'Informações', url: '/empregadoinformacoes', icon: 'information-circle' },
        { title: 'Currículos', url: '/empregadocurriculos', icon: 'reader' },
        { title: 'Propostas' , url: '/empregadopropostas', icon: 'briefcase'},
        { title: 'Configurações', url: '/empregadoconfigs', icon: 'settings' },
      ];
    }
    if(this.appPages=='j'){
      this.appPages = [
        { title: 'Home', url: '/empresahome', icon: 'home' },
        { title: 'Informações', url: '/empresainformacoes', icon: 'information-circle' },
        { title: 'Currículos', url: '/empresaCurriculos', icon: 'reader' },
        { title: 'Configurações', url: '/empresaconfigs', icon: 'settings' },
      ];
    }
    
  }

  redirect(url:any){
    if(url=="/empregadoinformacoes"){
      this._router.navigateByUrl("/empregadoinformacoes",{state:{obj:this.empregado}})
    }
  }

}
