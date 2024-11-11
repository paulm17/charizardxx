import { CSSProperties } from 'react';
import { CharizardxxStyleProp } from '../../../../Box';
import { CharizardxxTheme } from '../../../../CharizardxxProvider';

interface ResolveStyleInput {
  style: CharizardxxStyleProp | undefined;
  theme: CharizardxxTheme;
}

export function resolveStyle({ style, theme }: ResolveStyleInput): CSSProperties {
  if (Array.isArray(style)) {
    return [...style].reduce<Record<string, any>>(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {}
    );
  }

  if (typeof style === 'function') {
    return style(theme);
  }

  if (style == null) {
    return {};
  }

  return style;
}
