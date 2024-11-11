import { fontFamilyResolver } from './font-family-resolver';

describe('@charizardxx/core/Box/font-family-resolver', () => {
  it('resolves theme font family', () => {
    expect(fontFamilyResolver('text')).toBe('var(--charizardxx-font-family)');
    expect(fontFamilyResolver('mono')).toBe('var(--charizardxx-font-family-monospace)');
    expect(fontFamilyResolver('heading')).toBe('var(--charizardxx-font-family-headings)');
  });

  it('resolves non theme font family', () => {
    expect(fontFamilyResolver('Arial')).toBe('Arial');
  });
});
