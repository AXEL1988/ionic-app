import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  persons: any = [
    {
      name: 'Goku',
      selected: true,
      colorName: 'Primary'
    },
    {
      name: 'Vegeta',
      isChecked: false,
      colorName: 'Secondary'
    },
    {
      name: 'Broli',
      isChecked: false,
      colorName: 'Success'
    },
    {
      name: 'Picolo',
      isChecked: false,
      colorName: 'Warning'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
