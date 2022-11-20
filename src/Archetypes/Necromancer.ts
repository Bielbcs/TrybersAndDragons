import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private static _archetypeInstances = 0;

  constructor(name: string, private _type: EnergyType = 'mana') { 
    super(name);
    Necromancer._archetypeInstances += 1;
  }

  get energyType() { return this._type; }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstances;
  }
}