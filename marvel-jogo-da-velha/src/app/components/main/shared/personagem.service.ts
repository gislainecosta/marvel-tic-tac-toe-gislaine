import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonagemService implements OnInit {
  privateKey = 'df8d494b713122c4cbaccb56c8e425907a0cda41';
  publicKey = 'a11ffe39cc4844b6d68143e60253e2d6';
  apiURl: string;
  hash: any;
  timestamp: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  listarPersonagens(nome:string): Observable<any> {
    return this.http.get<any[]>(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nome}&orderBy=name&limit=100&apikey=${this.publicKey}`
      );


  }
}
