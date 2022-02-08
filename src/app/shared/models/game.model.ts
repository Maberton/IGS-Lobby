export class Game {
  name: string;
  jackpot: number;

  constructor(name = '', jackpot = 0) {
    this.name = name;
    this.jackpot = jackpot;
  }
}