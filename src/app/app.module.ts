import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    GameListComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
