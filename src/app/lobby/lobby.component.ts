import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  score = 12800000;

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

  ngOnInit(): void {
    console.log('local - ', this.locale);
  }

}
