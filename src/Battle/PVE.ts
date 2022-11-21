import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _player2: SimpleFighter[];

  constructor(p1: Fighter, p2: SimpleFighter[]) {
    super(p1);
    
    this._player1 = p1;
    this._player2 = p2;
  }

  public get player1(): Fighter {
    return this._player1;
  }

  public get player2(): SimpleFighter[] {
    return this._player2;
  }

  public fight(): number {
    this.player2.forEach((enemy) => {
      while (this.player1.lifePoints !== -1 && enemy.lifePoints !== -1) {
        this.player1.attack(enemy);
        enemy.attack(this.player1);
      }
    });
    return super.fight();
  }
}