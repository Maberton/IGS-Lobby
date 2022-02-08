import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input()
  jackpot?: number;

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

  ngOnInit(): void {
  }

}
