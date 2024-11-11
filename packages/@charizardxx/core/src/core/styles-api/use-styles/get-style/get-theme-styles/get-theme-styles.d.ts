import { CharizardxxTheme } from '../../../../CharizardxxProvider';
interface GetThemeStylesOptions {
    theme: CharizardxxTheme;
    themeName: string[];
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
    selector: string;
}
export declare function getThemeStyles({ theme, themeName, props, stylesCtx, selector, }: GetThemeStylesOptions): any;
export {};
