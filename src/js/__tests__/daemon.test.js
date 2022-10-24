import Daemon from '../daemon';

const received = new Daemon('Maxim');
test('Тест класса Daemon attack', () => {
  received.attacks = 2;
  expect(received.attacks).toBe(72);
});

test('Тест класса Daemon stoned', () => {
  received.stoned = 2;
  expect(received.stoned).toBe(67);
});
