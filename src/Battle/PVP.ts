import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    
    this._player1 = p1;
    this._player2 = p2;
  }

  // public fight(): void {
  //   this._player1.attack
  // }
}