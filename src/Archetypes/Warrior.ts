import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private static _archetypeInstances = 0;

  constructor(name: string, private _type: EnergyType = 'stamina') { 
    super(name);
    Warrior._archetypeInstances += 1;
  }

  get energyType() { return this._type; }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }
}