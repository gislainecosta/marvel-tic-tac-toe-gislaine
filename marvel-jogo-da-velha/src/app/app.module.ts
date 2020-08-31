import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/main/game/game.component';
import { CardTutorialComponent } from './components/header/card-tutorial/card-tutorial.component';
import { GamerSearchComponent } from './components/main/gamer-search/gamer-search.component';
import { CardErroComponent } from './components/main/card-erro/card-erro.component';
import { JogoDaVelhaModule } from './components/jogo-da-velha';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GameComponent,
    CardTutorialComponent,
    GamerSearchComponent,
    CardErroComponent,
  ],
  imports: [
    JogoDaVelhaModule,
    HeaderModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
