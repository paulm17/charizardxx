import { CSSProperties } from 'react';
import { CssVariable } from '../../../../Box';
import { CharizardxxTheme } from '../../../../CharizardxxProvider';
import { mergeVars } from './merge-vars';

type ResolvedVars = Partial<Record<string, Record<CssVariable, string>>>;

export type VarsResolver = (
  theme: CharizardxxTheme,
  props: Record<string, any>,
  stylesCtx: Record<string, any> | undefined
) => ResolvedVars;

interface ResolveVarsInput {
  vars: VarsResolver | undefined;
  varsResolver: VarsResolver | undefined;
  theme: CharizardxxTheme;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
  selector: string;
  themeName: string[];
}

export function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
  themeName,
}: ResolveVarsInput) {
  return mergeVars([
    varsResolver?.(theme, props, stylesCtx),
    ...themeName.map((name) => theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
    vars?.(theme, props, stylesCtx),
  ])?.[selector] as CSSProperties;
}
