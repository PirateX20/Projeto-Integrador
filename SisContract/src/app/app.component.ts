import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages :any;
  public tipo: string = 'f';
  constructor() {

  }

  ngOnInit(){
    if(this.tipo=='f'){
      this.appPages = [
        { title: 'Home', url: '/empregadohome', icon: 'home' },
        { title: 'Informações', url: '/empregadoinformacoes', icon: 'information-circle' },
        { title: 'Currículos', url: '/folder/Favorites', icon: 'reader' },
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
}
