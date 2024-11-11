import { randomId } from './random-id';

describe('@charizardxx/hooks/random-id', () => {
  it('returns random id with charizardxx- prefix', () => {
    expect(randomId().includes('charizardxx-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
