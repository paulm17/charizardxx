import type { CharizardxxTheme } from '../../CharizardxxProvider';
import type { CharizardxxStyleProp } from '../Box.types';

export function getStyleObject(
  style: CharizardxxStyleProp | undefined,
  theme: CharizardxxTheme
): React.CSSProperties {
  if (Array.isArray(style)) {
    return [...style].reduce<Record<string, any>>(
      (acc, item) => ({ ...acc, ...getStyleObject(item, theme) }),
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
