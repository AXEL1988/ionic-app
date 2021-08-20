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
      icon: 'american-football-outline',
      name: 'action-sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'card-outline',
      name: 'card',
      redirecTo: '/cards'
    },
    {
      icon: 'checkbox-outline',
      name: 'checkbox',
      redirecTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirecTo: '/date-time'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
