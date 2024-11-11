import { CSSProperties } from 'react';
import { CssVariable } from '../../../../Box';
import { CharizardxxTheme } from '../../../../CharizardxxProvider';
type ResolvedVars = Partial<Record<string, Record<CssVariable, string>>>;
export type VarsResolver = (theme: CharizardxxTheme, props: Record<string, any>, stylesCtx: Record<string, any> | undefined) => ResolvedVars;
interface ResolveVarsInput {
    vars: VarsResolver | undefined;
    varsResolver: VarsResolver | undefined;
    theme: CharizardxxTheme;
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
    selector: string;
    themeName: string[];
}
export declare function resolveVars({ vars, varsResolver, theme, props, stylesCtx, selector, themeName, }: ResolveVarsInput): CSSProperties;
export {};
