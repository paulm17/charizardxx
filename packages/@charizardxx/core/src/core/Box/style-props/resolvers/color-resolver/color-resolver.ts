import { CharizardxxTheme, parseThemeColor } from '../../../../CharizardxxProvider';

export function colorResolver(color: unknown, theme: CharizardxxTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === 'dimmed') {
    return 'var(--charizardxx-color-dimmed)';
  }

  if (parsedColor.color === 'bright') {
    return 'var(--charizardxx-color-bright)';
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}

export function textColorResolver(color: unknown, theme: CharizardxxTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.isThemeColor && parsedColor.shade === undefined) {
    return `var(--charizardxx-color-${parsedColor.color}-text)`;
  }

  return colorResolver(color, theme);
}
