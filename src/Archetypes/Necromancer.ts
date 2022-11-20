import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _type: 'mana';
  private static _count = 0;

  constructor(name: string) {
    super(name);

    this._type = 'mana';
    Necromancer._count += 1;
  }

  public get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return this._count;
  }
}