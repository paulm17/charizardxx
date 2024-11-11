import type { CharizardxxColorScheme, CharizardxxTheme } from '../../theme.types';

export function getPrimaryShade(theme: CharizardxxTheme, colorScheme: CharizardxxColorScheme) {
  if (typeof theme.primaryShade === 'number') {
    return theme.primaryShade;
  }

  if (colorScheme === 'dark') {
    return theme.primaryShade.dark;
  }

  return theme.primaryShade.light;
}
