import Race from './Race';

export default class Dwarf extends Race {
  private static _racesInstances = 0;
  constructor(
    name: string, 
    dexterity: number, 
    private _lifePoints = 80, 
  ) {
    super(name, dexterity);
  }

  get maxLifePoints() {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf._racesInstances += 1;
    return Dwarf._racesInstances;
  }
}