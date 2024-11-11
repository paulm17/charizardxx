import { DEFAULT_THEME } from '@charizardxx/system';
import { isVirtualColor, virtualColor } from './virtual-color';

describe('@charizardxx/core/virtual-color', () => {
  it('creates virtual color object', () => {
    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toStrictEqual([
      'var(--charizardxx-color-test-0)',
      'var(--charizardxx-color-test-1)',
      'var(--charizardxx-color-test-2)',
      'var(--charizardxx-color-test-3)',
      'var(--charizardxx-color-test-4)',
      'var(--charizardxx-color-test-5)',
      'var(--charizardxx-color-test-6)',
      'var(--charizardxx-color-test-7)',
      'var(--charizardxx-color-test-8)',
      'var(--charizardxx-color-test-9)',
    ]);

    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toHaveProperty(
      'dark',
      'dark'
    );
    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toHaveProperty(
      'light',
      'light'
    );
  });

  it('correctly detects virtual color object', () => {
    expect(isVirtualColor(virtualColor({ name: 'test', dark: 'dark', light: 'light' }))).toBe(true);
    expect(isVirtualColor(DEFAULT_THEME.colors.blue)).toBe(false);
  });
});
