import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class HeaderService {

  private showTutorial: boolean;
  private showNewGame: boolean;

  constructor() { }

  inicializar(): void {
    this.showTutorial = false;
    this.showNewGame = false;
  }

  get ShowTutorial(): boolean {
    return this.showTutorial;
  }

  get ShowNewGame(): boolean {
    return this.showNewGame;
  }

  abrirTutorial():void{
    this.showTutorial = true;
  }

  fecharTutorial(): void {
    this.showTutorial = false;
  }

  abrirNewGame(): void {
    this.showNewGame = true;
  }

  fecharNewGame(): void {
    this.showNewGame = false;
  }
}



