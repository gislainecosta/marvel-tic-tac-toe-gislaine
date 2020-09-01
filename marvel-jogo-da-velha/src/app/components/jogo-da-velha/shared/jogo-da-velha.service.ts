import { Injectable } from '@angular/core';

@Injectable()

export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private vitorias1: number = 0;
  private vitorias2: number = 0;
  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private jogador: number;
  private showInicio: boolean;
  private showTabuleiro: boolean;
  private showFinal: boolean;

  constructor() { }

  inicializar(): void {
    this.showInicio = true;
    this.showTabuleiro = false;
    this.showFinal = false;
    this.numMovimentos = 0;
    this.jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO]
    }
  }

  get ShowInicio(): boolean {
    return this.showInicio;
  }

  get ShowFinal(): boolean {
    return this.showFinal;
  }

  get ShowTabuleiro(): boolean {
    return this.showTabuleiro;
  }

  get Jogador(): number {
    return this.jogador;
  }

  get Vitorias1(): number {
    return this.vitorias1;
  }

  get Vitorias2(): number {
    return this.vitorias2;
  }

  iniciarJogo(): void {
    this.showInicio = false;
    this.showTabuleiro = true;
  }

  jogar(posX: number, posY: number): void {
    if (this.tabuleiro[posX][posY] !== this.VAZIO ||
      this.vitoria) {
      return;
    }

    this.tabuleiro[posX][posY] = this.jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this.jogador);
    this.jogador = (this.jogador === this.X) ? this.O : this.X;

    if (this.vitoria !== false) {
      this.showFinal = true;
    }

    if (!this.vitoria && this.numMovimentos === 9) {
      this.jogador = 0;
      this.showFinal = true;
    }
  }

  resetarPlacar():void{
    this.vitorias1 =0;
    this.vitorias2 =0;
  }

  fimJogo(linha: number, coluna: number, tabuleiro: any, jogador: number) {
    let fim: any = false;

    if (tabuleiro[linha][0] === jogador &&
      tabuleiro[linha][1] === jogador &&
      tabuleiro[linha][2] === jogador) {
      fim = [[linha, 0], [linha, 1], [linha, 2]];
      if (jogador === 1) {
        this.vitorias1++
      } else if (jogador === 2) {
        this.vitorias2++
      }
    }

    if (tabuleiro[0][coluna] === jogador &&
      tabuleiro[1][coluna] === jogador &&
      tabuleiro[2][coluna] === jogador) {
      fim = [[0, coluna], [1, coluna], [2, coluna]];
      if (jogador === 1) {
        this.vitorias1++
      } else if (jogador === 2) {
        this.vitorias2++
      }
    }

    if (tabuleiro[0][0] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][2] === jogador) {
      fim = [[0, 0], [1, 1], [2, 2]];
      if (jogador === 1) {
        this.vitorias1++
      } else if (jogador === 2) {
        this.vitorias2++
      }
    }

    if (tabuleiro[0][2] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][0] === jogador) {
      fim = [[0, 2], [1, 1], [2, 0]];
      if (jogador === 1) {
        this.vitorias1++
      } else if (jogador === 2) {
        this.vitorias2++
      }
    }

    

    console.log('vit1', this.vitorias1)
    console.log('vit2', this.vitorias2)

    return fim;
  }

  exibirX(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.X;
  }

  exibirO(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.O;
  }

  novoJogo(): void {
    this.inicializar();
    this.showInicio = false;
    this.showFinal = false;
    this.showTabuleiro = true;
  }
}