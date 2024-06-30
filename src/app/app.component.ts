import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'transgender' },
    { title: 'Edad', url: '/edad', icon: 'balloon' },
    { title: 'Pais', url: '/pais', icon: 'flag' },
    { title: 'Clima', url: '/clima', icon: 'cloud' },
    { title: 'WordPress', url: '/wordpress', icon: 'easel' },
    { title: 'MyInfo', url: '/myinfo', icon: 'megaphone' },
    
  ];
  
  constructor() {}
}
