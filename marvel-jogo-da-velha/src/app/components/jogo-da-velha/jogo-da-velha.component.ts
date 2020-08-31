import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared'

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private JogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.JogoDaVelhaService.inicializar();
  }

  get showInicio(): boolean {
    return this.JogoDaVelhaService.ShowInicio
  }

  get showTabuleiro(): boolean {
    return this.JogoDaVelhaService.ShowTabuleiro
  }

  get showFinal(): boolean {
    return this.JogoDaVelhaService.ShowFinal
  }

  get jogador(): number {
    return this.JogoDaVelhaService.Jogador
  }

  novoJogo(): void {
    this.JogoDaVelhaService.novoJogo()
  }

  iniciarJogo(): void {
    this.JogoDaVelhaService.iniciarJogo()
  }

  jogar(posX: number, posY: number): void {
    this.JogoDaVelhaService.jogar(posX, posY)
  }

  exibirX(posX: number, posY: number): boolean {
    return this.JogoDaVelhaService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.JogoDaVelhaService.exibirO(posX, posY);
  }

  posicoes = [
    {
      x: 0,
      y: 0
    },
    {
      x: 0,
      y: 1
    },
    {
      x: 0,
      y: 2
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 1,
      y: 1
    },
    {
      x: 1,
      y: 2
    },
    {
      x: 2,
      y: 0
    },
    {
      x: 2,
      y: 1
    },
    {
      x: 2,
      y: 2
    },
  ]
}

