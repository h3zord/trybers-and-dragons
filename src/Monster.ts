import { SimpleFighter } from './Fighter';
import { checkDied } from './utils';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    this._lifePoints = checkDied(this.lifePoints);
    return this.lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}