import cx from 'clsx';
import { CharizardxxTheme } from '../../../../CharizardxxProvider';
import { GetStylesApiOptions } from '../../../styles-api.types';

interface GetGlobalClassNamesOptions {
  theme: CharizardxxTheme;
  unstyled: boolean | undefined;
  options: GetStylesApiOptions | undefined;
}

export const FOCUS_CLASS_NAMES = {
  always: 'charizardxx-focus-always',
  auto: 'charizardxx-focus-auto',
  never: 'charizardxx-focus-never',
} as const;

/** Returns classes that are defined globally (focus and active styles) based on options */
export function getGlobalClassNames({ theme, options, unstyled }: GetGlobalClassNamesOptions) {
  return cx(
    options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    options?.active && !unstyled && theme.activeClassName
  );
}
