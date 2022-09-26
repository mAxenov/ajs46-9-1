import Character from './app';

export default class Magician extends Character {
  constructor(name, type = 'Magician', attack = 100) {
    super(name, type, attack);
  }
}
