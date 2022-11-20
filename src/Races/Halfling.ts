import Race from './Race';

export default class Halfling extends Race {
  private static _racesInstances = 0;
  constructor(
    name: string, 
    dexterity: number, 
    private _lifePoints = 60, 
  ) {
    super(name, dexterity);
  }

  get maxLifePoints() {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    Halfling._racesInstances += 1;
    return Halfling._racesInstances;
  }
}