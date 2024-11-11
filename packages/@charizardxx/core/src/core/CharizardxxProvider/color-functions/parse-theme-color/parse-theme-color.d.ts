import type { CssVariable } from '../../../Box';
import type { CharizardxxColorScheme, CharizardxxColorShade, CharizardxxTheme } from '../../theme.types';
interface ParseThemeColorOptions {
    color: unknown;
    theme: CharizardxxTheme;
    colorScheme?: CharizardxxColorScheme;
}
interface ParseThemeColorResult {
    color: string;
    value: string;
    shade: CharizardxxColorShade | undefined;
    variable: CssVariable | undefined;
    isThemeColor: boolean;
    isLight: boolean;
}
export declare function parseThemeColor({ color, theme, colorScheme, }: ParseThemeColorOptions): ParseThemeColorResult;
export {};
