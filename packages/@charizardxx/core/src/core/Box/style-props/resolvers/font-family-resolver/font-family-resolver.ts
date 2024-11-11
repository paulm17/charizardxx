const values = {
  text: 'var(--charizardxx-font-family)',
  mono: 'var(--charizardxx-font-family-monospace)',
  monospace: 'var(--charizardxx-font-family-monospace)',
  heading: 'var(--charizardxx-font-family-headings)',
  headings: 'var(--charizardxx-font-family-headings)',
};

export function fontFamilyResolver(fontFamily: unknown) {
  if (typeof fontFamily === 'string' && fontFamily in values) {
    return values[fontFamily as keyof typeof values];
  }

  return fontFamily;
}
