import Character from './app';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', attack = 80) {
    super(name, type, attack);
  }
}
