import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../shared/personagem.service';


@Component({
  selector: 'app-card-erro',
  templateUrl: './card-erro.component.html',
  styleUrls: ['./card-erro.component.css']
})
export class CardErroComponent implements OnInit {

  constructor(private personagensSvc: PersonagemService) { }

  ngOnInit(): void {
  }

  fecharErro(): void {
    this.personagensSvc.fecharErro();
  }
}
