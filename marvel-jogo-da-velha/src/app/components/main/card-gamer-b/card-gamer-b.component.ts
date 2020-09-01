import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../shared/personagem.service';
import { JogoDaVelhaService } from './../../jogo-da-velha/shared/jogo-da-velha.service';


@Component({
  selector: 'app-card-gamer-b',
  templateUrl: './card-gamer-b.component.html',
  styleUrls: ['./card-gamer-b.component.css']
})
export class CardGamerBComponent implements OnInit {
  numeroJogadorB: number; 
  personagens: Array<any>;
  personagemJogadorB: Array<any>
  lista: Array<any>;
  vitoriasB: number;
  nomePesquisar: string;
  pathFotoB:string;

  constructor(
    private personagensSvc: PersonagemService,
    private jogoVelhaSvc: JogoDaVelhaService
  ) { }

  ngOnInit(): void {
    this.personagensSvc.inicializar();
    this.vitoriasB = this.numeroJogadorB === 1 ? this.jogoVelhaSvc.Vitorias1 : this.jogoVelhaSvc.Vitorias2;
    this.numeroJogadorB = this.personagensSvc.numJogadorB
    this.pathFotoB = this.numeroJogadorB === 1 ? '../../../../assets/images/hydra.png' : '../../../../assets/images/shield.png'
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

  escolhePersonagemB(id: number): void {
    this.personagensSvc
      .pegaPersonagem(id)
      .subscribe((dados) => (this.personagemJogadorB = dados.data.results));

    this.personagensSvc.jogadorBEscolhe()
  }

  iniciarJogoB(): void {
    this.personagensSvc.jogadorBcomeca();
  }

  escolherNovamenteB(): void {
    this.personagensSvc.escolherNovamenteA();
  }

  get showProcurarB(): boolean {
    return this.personagensSvc.ShowProcurarB;
  }

  get showEscolhaB(): boolean {
    return this.personagensSvc.ShowEscolhaB;
  }

  get showErro(): boolean {
    return this.personagensSvc.ShowErro
  }

  get showJogadorB(): boolean {
    return this.personagensSvc.ShowJogadorB;
  }

  get jogadorB(): number {
    return this.personagensSvc.numJogadorB;
  }


}
