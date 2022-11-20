import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private static _archetypeInstances = 0;

  constructor(name: string, private _type: EnergyType = 'stamina') { 
    super(name);
    Ranger._archetypeInstances += 1;
  }

  get energyType() { return this._type; }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeInstances;
  }
}