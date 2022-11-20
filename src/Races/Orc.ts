import Race from './Race';

export default class Orc extends Race {
  private static _racesInstances = 0;
  constructor(
    name: string, 
    dexterity: number, 
    private _lifePoints = 74, 
  ) {
    super(name, dexterity);
  }

  get maxLifePoints() {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    Orc._racesInstances += 1;
    return Orc._racesInstances;
  }
}