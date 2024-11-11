import type { CharizardxxTheme } from '../../../../CharizardxxProvider';
import type { _Styles } from '../get-style';
export interface ResolveStylesInput {
    theme: CharizardxxTheme;
    styles: _Styles | _Styles[];
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
}
export declare function resolveStyles({ theme, styles, props, stylesCtx }: ResolveStylesInput): Record<string, any>;
