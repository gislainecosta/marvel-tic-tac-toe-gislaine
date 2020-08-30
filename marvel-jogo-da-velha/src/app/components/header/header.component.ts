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

  isOpenTutorial: boolean = false;

  variavel = 'Reste';

  newGame(): void {
    this.isOpenNewGame = true
  }

  openTutorial(): void {
    this.isOpenTutorial = true
  }
}
