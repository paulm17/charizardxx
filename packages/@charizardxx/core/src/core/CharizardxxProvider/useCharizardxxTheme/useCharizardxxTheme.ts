import { defaultVariantColorsResolver } from '../color-functions';
import { DEFAULT_THEME } from '@charizardxx/system';

export function useCharizardxxTheme() {
  const theme = DEFAULT_THEME;
  theme.variantColorResolver = defaultVariantColorsResolver;

  return theme;
}
