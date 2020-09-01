import { Component, OnInit } from '@angular/core';
import { HeaderService } from './shared/header.service';
import { JogoDaVelhaService } from './../jogo-da-velha/shared/jogo-da-velha.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private HeaderService: HeaderService,
    private jogoVelhaSvc: JogoDaVelhaService
  ) {}

  ngOnInit(): void {
    this.HeaderService.inicializar();
  }

  get ShowTutorial(): boolean {
    return this.HeaderService.ShowTutorial
  }

  get ShowNewGame(): boolean {
    return this.HeaderService.ShowNewGame
  }

  abrirTutorial():void{
    this.HeaderService.abrirTutorial()
  }

  abrirNewGame(): void {
    this.HeaderService.abrirNewGame()
  }

  fecharNewGame(): void {
    this.HeaderService.fecharNewGame()
    this.jogoVelhaSvc.resetarPlacar()
  }

  novoJogo(): void {
    this.HeaderService.fecharNewGame()
  }
}

