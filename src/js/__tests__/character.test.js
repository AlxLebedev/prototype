import Character from '../character';

test('attack test', () => {
  const hero = new Character('robo', 'robocop');
  hero.damage(10);
  const received = hero;
  const expected = {
    name: 'robo',
    type: 'robocop',
    health: 94,
    attack: 10,
    protection: 40,
  };

  expect(received).toEqual(expected);
});
