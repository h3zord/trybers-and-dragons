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

  public get player1(): Fighter {
    return this._player1;
  }

  public get player2(): Fighter {
    return this._player2;
  }

  public fight(): number {
    while (this.player1.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return super.fight();
  }
}