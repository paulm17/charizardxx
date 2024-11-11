import { CSSProperties } from 'react';
import { CharizardxxStyleProp } from '../../../Box';
import { CharizardxxTheme } from '../../../CharizardxxProvider';
import { GetStylesApiOptions } from '../../styles-api.types';
import { getThemeStyles } from './get-theme-styles/get-theme-styles';
import { resolveStyle } from './resolve-style/resolve-style';
import { resolveStyles } from './resolve-styles/resolve-styles';
import { resolveVars, VarsResolver } from './resolve-vars/resolve-vars';

export type _Styles =
  | undefined
  | Partial<Record<string, CSSProperties>>
  | ((
      theme: CharizardxxTheme,
      props: Record<string, any>,
      ctx: Record<string, any> | undefined
    ) => Partial<Record<string, CSSProperties>>);

export interface GetStyleInput {
  theme: CharizardxxTheme;
  themeName: string[];
  selector: string;
  rootSelector: string;
  options: GetStylesApiOptions | undefined;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
  styles: _Styles;
  style: CharizardxxStyleProp | undefined;
  vars: VarsResolver | undefined;
  varsResolver: VarsResolver | undefined;
  withStylesTransform?: boolean;
}

export function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver,
  withStylesTransform,
}: GetStyleInput): CSSProperties {
  return {
    ...(!withStylesTransform && getThemeStyles({ theme, themeName, props, stylesCtx, selector })),
    ...(!withStylesTransform && resolveStyles({ theme, styles, props, stylesCtx })[selector]),
    ...(!withStylesTransform &&
      resolveStyles({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[
        selector
      ]),
    ...resolveVars({ theme, props, stylesCtx, vars, varsResolver, selector, themeName }),
    ...(rootSelector === selector ? resolveStyle({ style, theme }) : null),
    ...resolveStyle({ style: options?.style, theme }),
  };
}
