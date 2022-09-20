import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Informações', url: '/folder/Outbox', icon: 'information-circle' },
    { title: 'Currículos', url: '/folder/Favorites', icon: 'reader' },
    { title: 'Configurações', url: '/folder/Archived', icon: 'settings' },
  ];
  constructor() {
    //asdasdasds
  }
}
