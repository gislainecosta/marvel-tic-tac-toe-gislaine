import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CardTutorialComponent } from './components/header/card-tutorial/card-tutorial.component';

import { CardErroComponent } from './components/main/card-erro/card-erro.component';
import { JogoDaVelhaModule } from './components/jogo-da-velha';
import { HeaderModule } from './components/header/header.module';
import { PersonagemService } from './components/main/shared/personagem.service';
import { HttpClientModule } from '@angular/common/http';
import { CardGamerAComponent } from './components/main/card-gamer-a/card-gamer-a.component';
import { CardGamerBComponent } from './components/main/card-gamer-b/card-gamer-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CardTutorialComponent,
    CardErroComponent,
    CardGamerAComponent,
    CardGamerBComponent,
  ],
  imports: [
    JogoDaVelhaModule,
    HeaderModule,
    BrowserModule,
    HttpClientModule 
  ],
  providers: [
    PersonagemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
