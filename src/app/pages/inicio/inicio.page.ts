import { Component, OnInit } from '@angular/core';

interface Componente {
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componente: Componente[] = [
    {
      name: 'action-sheet',
      icon: 'american-football-outline',
      redirecTo: '/action-sheet'
    },
    {
      name: 'alert',
      icon: 'logo-apple-appstore',
      redirecTo: '/alert'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
