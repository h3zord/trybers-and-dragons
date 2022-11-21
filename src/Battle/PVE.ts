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

  public static fight(): number {
    return 0;
  }
}