import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonagemService implements OnInit {
  publicKey = 'a11ffe39cc4844b6d68143e60253e2d6';
  private numeroJogador: number;
  private jogadorA: number;
  private jogadorB: number;
  private showProcurar: boolean;
  private showEscolha: boolean;
  private showJogador: boolean;
  private showErro: boolean;

  inicializar(): void {
    this.jogadorA = Math.floor(Math.random() * 2) + 1;
    this.showProcurar = true;
    this.showErro = false;
    this.showEscolha = false;
    this.showJogador = false;
    this.jogadorB = this.jogadorA === 1 ? 2 : 1;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  listarPersonagens(nome: string): Observable<any> {
    return this.http.get<any[]>(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nome}&orderBy=name&limit=100&apikey=${this.publicKey}`
    );
  }

  pegaPersonagem(id: number): Observable<any> {
    return this.http.get<any[]>(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this.publicKey}`
    );
  }

  escolherNovamenteA():void{
    this.showEscolha = false;
    this.showProcurar = true;
  }

  jogadorAcomeca():void{
    this.showJogador = true;
    this.showEscolha = false;
  }

  get ShowProcurar(): boolean {
    return this.showProcurar;
  }

  get ShowEscolha(): boolean {
    return this.showEscolha;
  }

  get ShowJogador(): boolean {
    return this.showJogador;
  }

  get ShowErro(): boolean {
    return this.showErro;
  }

  get JogadorA(): number {
    return this.jogadorA;
  }

  get JogadorB(): number {
    return this.jogadorB;
  }

  jogadorAEscolhe(): void {
    this.showEscolha = true;
    this.showProcurar = false;
  }

  abreErro():void{
    this.showErro = true;
  }

  fecharErro(): void{
    this.showErro = false;
    this.showProcurar = true;
  }
}
