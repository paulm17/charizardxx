import type { CharizardxxTheme } from '../../CharizardxxProvider';
import type { CharizardxxStyleProp, CssVarsProp } from '../Box.types';
interface GetBoxStyleOptions {
    theme: CharizardxxTheme;
    styleProps: React.CSSProperties;
    style?: CharizardxxStyleProp;
    vars?: CssVarsProp;
}
export declare function getBoxStyle({ theme, style, vars, styleProps, }: GetBoxStyleOptions): React.CSSProperties;
export {};
