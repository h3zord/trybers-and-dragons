import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf('Elfa', this._dexterity);
    this._archetype = new Mage('Mago');
    this._maxLifePoints = 49.5;
    this._lifePoints = 49.5;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: getRandomInt(1, 10) };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  private checkDied(): void {
    const HP = this.lifePoints;

    if (HP <= 0) this._lifePoints = -1;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage <= 0) {
      this._lifePoints -= 1;
      this.checkDied();
      return this._lifePoints;
    }

    this._lifePoints -= damage;
    this.checkDied();
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    const damage = this.strength;
    enemy.receiveDamage(damage);
  }

  public checkMaxHp(): void {
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this.checkMaxHp();
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}