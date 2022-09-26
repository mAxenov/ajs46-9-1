import Magician from '../magician';

test('Тест класса Magician', () => {
  const received = new Magician('Maxim');
  received.attacks = 2;
  expect(received.attacks).toBe(85);
});
