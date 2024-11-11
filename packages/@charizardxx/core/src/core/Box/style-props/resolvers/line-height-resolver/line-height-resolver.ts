import { CharizardxxTheme } from '../../../../CharizardxxProvider';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export function lineHeightResolver(value: unknown, theme: CharizardxxTheme) {
  if (typeof value === 'string' && value in theme.lineHeights) {
    return `var(--charizardxx-line-height-${value})`;
  }

  if (typeof value === 'string' && headings.includes(value)) {
    return `var(--charizardxx-${value}-line-height)`;
  }

  return value;
}
