import type { CharizardxxTheme } from '../../CharizardxxProvider';
import type { CharizardxxStyleProp, CssVarsProp } from '../Box.types';

interface GetBoxStyleOptions {
  theme: CharizardxxTheme;
  styleProps: React.CSSProperties;
  style?: CharizardxxStyleProp;
  vars?: CssVarsProp;
}

function mergeStyles(
  styles: CharizardxxStyleProp | CssVarsProp | undefined,
  theme: CharizardxxTheme
): React.CSSProperties {
  if (Array.isArray(styles)) {
    return [...styles].reduce<Record<string, any>>(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
      {}
    );
  }

  if (typeof styles === 'function') {
    return styles(theme);
  }

  if (styles == null) {
    return {};
  }

  return styles;
}

export function getBoxStyle({
  theme,
  style,
  vars,
  styleProps,
}: GetBoxStyleOptions): React.CSSProperties {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}
