import Race from './Race';

export default class Elf extends Race {
  private static _racesInstances = 0;
  constructor(
    name: string, 
    dexterity: number, 
    private _lifePoints = 99, 
  ) {
    super(name, dexterity);
  }

  get maxLifePoints() {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    Elf._racesInstances += 1;
    return Elf._racesInstances;
  }
}