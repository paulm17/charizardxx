import type { CharizardxxTheme } from '../../theme.types';

export function getAutoContrastValue(autoContrast: boolean | undefined, theme: CharizardxxTheme) {
  return typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;
}
