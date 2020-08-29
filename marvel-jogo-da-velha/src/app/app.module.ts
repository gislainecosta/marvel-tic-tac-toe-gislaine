import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { GameComponent } from './components/main/game/game.component';
import { GamerComponent } from './components/main/gamer/gamer.component';
import { CardListComponent } from './components/header/card-list/card-list.component';
import { CardTutorialComponent } from './components/header/card-tutorial/card-tutorial.component';
import { CardNewGameComponent } from './components/header/card-new-game/card-new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GameComponent,
    GamerComponent,
    CardListComponent,
    CardTutorialComponent,
    CardNewGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
