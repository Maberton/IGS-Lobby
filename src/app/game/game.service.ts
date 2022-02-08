import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../shared/models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Array<Game> = [
    {name: 'Game 1', jackpot: 123001},
    {name: 'Game 2', jackpot: 123002},
    {name: 'Game 3', jackpot: 123003},
    {name: 'Game 4', jackpot: 123004},
    {name: 'Game 5', jackpot: 123005},
    {name: 'Game 6', jackpot: 123006}
  ];

  constructor() { }

  getGameList(): Observable<Array<Game>> {
    return of(this.games);
  }
}
