import Daemon from '../daemon';

test('Тест класса Daemon', () => {
  const received = new Daemon('Maxim');
  received.attacks = 2;
  expect(received.attacks).toBe(67);
});
