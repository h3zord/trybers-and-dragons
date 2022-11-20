import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _type: 'mana';
  private static _count = 0;

  constructor(name: string) {
    super(name);

    this._type = 'mana';
    Mage._count += 1;
  }

  public get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return this._count;
  }
}