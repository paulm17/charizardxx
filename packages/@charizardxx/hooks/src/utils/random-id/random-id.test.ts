import { randomId } from './random-id';

describe('@charizardxx/hooks/random-id', () => {
  it('returns random id with mantine- prefix', () => {
    expect(randomId().includes('mantine-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
