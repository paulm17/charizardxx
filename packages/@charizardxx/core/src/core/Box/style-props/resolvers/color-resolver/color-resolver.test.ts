import { DEFAULT_THEME } from '@charizardxx/system';
import { colorResolver } from './color-resolver';

describe('@charizardxx/core/Box/color-resolver', () => {
  it('resolves theme color', () => {
    expect(colorResolver('red', DEFAULT_THEME)).toBe('var(--charizardxx-color-red-filled)');
    expect(colorResolver('red.5', DEFAULT_THEME)).toBe('var(--charizardxx-color-red-5)');
  });

  it('resolves non theme color', () => {
    expect(colorResolver('#FEFEFE', DEFAULT_THEME)).toBe('#FEFEFE');
  });

  it('throws error if color is not string', () => {
    expect(() => colorResolver(1 as any, DEFAULT_THEME)).toThrow();
  });

  it('resolves white and black colors', () => {
    expect(colorResolver('white', DEFAULT_THEME)).toBe('var(--charizardxx-color-white)');
    expect(colorResolver('black', DEFAULT_THEME)).toBe('var(--charizardxx-color-black)');
  });

  it('resolves dimmed color', () => {
    expect(colorResolver('dimmed', DEFAULT_THEME)).toBe('var(--charizardxx-color-dimmed)');
  });
});