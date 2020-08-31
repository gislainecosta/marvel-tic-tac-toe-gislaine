import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../shared/personagem.service';

@Component({
  selector: 'app-gamer-search',
  templateUrl: './gamer-search.component.html',
  styleUrls: ['./gamer-search.component.css'],
})
export class GamerSearchComponent implements OnInit {
  personagens: Array<any>;
  lista: Array<any>;
  nome = 'Iron';

  constructor(private personagensSvc: PersonagemService) {}

  ngOnInit(): void {
    this.listar(this.nome);
  }

  listar(nome) {
    this.personagensSvc
      .listarPersonagens(nome)
      .subscribe((dados) => (this.personagens = dados.data.results));
  }

}
