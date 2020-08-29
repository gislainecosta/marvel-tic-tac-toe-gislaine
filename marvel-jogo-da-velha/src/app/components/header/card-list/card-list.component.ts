import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  array=[
    {
      nome: 'Capitão América',
      foto: 'aqui vai a foto'
    },
    {
      nome: 'Homem de Ferro',
      foto: 'aqui vai a foto'
    },
    {
      nome: 'Viúva Negra',
      foto: 'aqui vai a foto'
    },
    {
      nome: 'Senhor das Estrelas',
      foto: 'aqui vai a foto'
    },
    {
      nome: 'Hulk',
      foto: 'aqui vai a foto'
    },
    {
      nome: 'Homem Aranha',
      foto: 'aqui vai a foto'
    }
  ]
}
