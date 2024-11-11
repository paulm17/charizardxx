import { DEFAULT_THEME } from '@charizardxx/system';
import { getGradient } from './get-gradient';

describe('@charizardxx/core/get-gradient', () => {
  it('returns default gradient from theme if gradient is not provided', () => {
    expect(getGradient(undefined, DEFAULT_THEME)).toStrictEqual(
      'linear-gradient(45deg, var(--charizardxx-color-blue-filled) 0%, var(--charizardxx-color-cyan-filled) 100%)'
    );
  });

  it('merges given gradient with theme default gradient', () => {
    expect(
      getGradient(
        {
          from: 'red',
          to: 'blue',
          deg: 90,
        },
        DEFAULT_THEME
      )
    ).toStrictEqual(
      'linear-gradient(90deg, var(--charizardxx-color-red-filled) 0%, var(--charizardxx-color-blue-filled) 100%)'
    );
  });

  it('get colors from theme by index', () => {
    expect(
      getGradient(
        {
          from: 'red.3',
          to: 'blue.8',
          deg: 90,
        },
        DEFAULT_THEME
      )
    ).toStrictEqual(
      'linear-gradient(90deg, var(--charizardxx-color-red-3) 0%, var(--charizardxx-color-blue-8) 100%)'
    );
  });

  it('allows using CSS colors', () => {
    expect(
      getGradient(
        {
          from: '#FEFEFE',
          to: '#CDCDCD',
          deg: 90,
        },
        DEFAULT_THEME
      )
    ).toStrictEqual('linear-gradient(90deg, #FEFEFE 0%, #CDCDCD 100%)');
  });
});
