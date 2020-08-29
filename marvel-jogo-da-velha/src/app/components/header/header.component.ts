import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isOpenNewGame: boolean = false;

  isOpenList: boolean = false;

  isOpenTutorial: boolean = false;

  variavel = 'Reste';

  openList(): void {
    this.isOpenList = true
  }

  newGame(): void {
    this.isOpenNewGame = true
  }

  openTutorial(): void {
    this.isOpenTutorial = true
  }
}
