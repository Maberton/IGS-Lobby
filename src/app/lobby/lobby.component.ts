import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  score = 17300000;
  cash = 1470.56;
  showCash = false;

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

  ngOnInit(): void {
  }

  toggleCash(): void {
    this.showCash = !this.showCash;
  }

}
