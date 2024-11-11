import { CharizardxxColor, CharizardxxGradient, CharizardxxTheme } from '../../theme.types';
export interface VariantColorsResolverInput {
    color: CharizardxxColor | undefined;
    theme: CharizardxxTheme;
    variant: string;
    gradient?: CharizardxxGradient;
    autoContrast?: boolean;
}
export interface VariantColorResolverResult {
    background: string;
    hover: string;
    color: string;
    border: string;
    hoverColor?: string;
}
export type VariantColorsResolver = (input: VariantColorsResolverInput) => VariantColorResolverResult;
export declare const defaultVariantColorsResolver: VariantColorsResolver;
