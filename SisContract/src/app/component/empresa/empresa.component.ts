import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  public appPages = [
    { title: 'Homess', url: '/folder/Inbox', icon: 'home' },
    { title: 'Informações', url: '/folder/Outbox', icon: 'information-circle' },
    { title: 'Currículos', url: '/folder/Favorites', icon: 'reader' },
    { title: 'Configurações', url: '/folder/Archived', icon: 'settings' },
  ];
  constructor() { }

  ngOnInit() {}

}
