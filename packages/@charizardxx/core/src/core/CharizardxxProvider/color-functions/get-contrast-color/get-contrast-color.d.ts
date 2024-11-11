import type { CharizardxxTheme } from '../../theme.types';
interface GetContrastColorInput {
    color: string | null | undefined;
    theme: CharizardxxTheme;
    autoContrast?: boolean | undefined | null;
}
export declare function getContrastColor({ color, theme, autoContrast }: GetContrastColorInput): "var(--charizardxx-color-black)" | "var(--charizardxx-color-white)";
export declare function getPrimaryContrastColor(theme: CharizardxxTheme, colorScheme: 'light' | 'dark'): "var(--charizardxx-color-black)" | "var(--charizardxx-color-white)";
export {};
