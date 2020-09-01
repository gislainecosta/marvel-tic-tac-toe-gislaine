import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../shared/personagem.service';
import { JogoDaVelhaService } from './../../jogo-da-velha/shared/jogo-da-velha.service';


@Component({
  selector: 'app-card-gamer-a',
  templateUrl: './card-gamer-a.component.html',
  styleUrls: ['./card-gamer-a.component.css']
})
export class CardGamerAComponent implements OnInit {
  numeroJogadorA: number;  
  personagens: Array<any>;
  personagemJogadorA: Array<any>
  lista: Array<any>;
  vitoriasA: number;
  nomePesquisar: string;
  pathFotoA: string;

  constructor(
    private personagensSvc: PersonagemService,
    private jogoVelhaSvc: JogoDaVelhaService
    ) { }

  ngOnInit(): void {
    this.personagensSvc.inicializar();
    this.vitoriasA = this.numeroJogadorA === 1 ? this.jogoVelhaSvc.Vitorias1 : this.jogoVelhaSvc.Vitorias2;
    this.numeroJogadorA = this.personagensSvc.numJogadorA
    this.pathFotoA = this.numeroJogadorA === 1 ? '../../../../assets/images/hydra.png' : '../../../../assets/images/shield.png'
  }

  buscaPersonagem() {
    let nome = this.nomePesquisar
    this.listar(nome)
  }

  listar(nome: string): void {
    this.personagensSvc
      .listarPersonagens(nome)
      .subscribe((dados) => (this.personagens = dados.data.results));

    if (this.personagens.length === 0) {
      this.personagensSvc.abreErro()
    }
  }

  escolhePersonagemA(id: number): void {
    this.personagensSvc
      .pegaPersonagem(id)
      .subscribe((dados) => (this.personagemJogadorA = dados.data.results));

    this.personagensSvc.jogadorAEscolhe()
  }

  iniciarJogoA(): void {
    this.personagensSvc.jogadorAcomeca();
  }

  escolherNovamenteA(): void {
    this.personagensSvc.escolherNovamenteA();
  }

  get showProcurarA(): boolean {
    return this.personagensSvc.ShowProcurarA;
  }

  get showEscolhaA(): boolean {
    return this.personagensSvc.ShowEscolhaA;
  }

  get showErro(): boolean {
    return this.personagensSvc.ShowErro
  }

  get showJogadorA(): boolean {
    return this.personagensSvc.ShowJogadorA;
  }

  get jogadorA(): number {
    return this.personagensSvc.numJogadorA;
  }
}
