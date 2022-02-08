import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';
import { Game } from '../shared/models/game.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games = new Array<Game>();
  pages = [1, 2, 3];

  constructor(
    private gs: GameService
  ) { }

  ngOnInit(): void {
    this.gs.getGameList()
    .pipe(take(1))
    .subscribe((resp: Array<Game>) => {
      this.games = resp;
    })
  }

}
