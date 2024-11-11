import { CharizardxxTheme } from '../../../../CharizardxxProvider';
interface GetThemeClassNamesOptions {
    theme: CharizardxxTheme;
    themeName: string[];
    selector: string;
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
}
export declare function getThemeClassNames({ themeName, theme, selector, props, stylesCtx, }: GetThemeClassNamesOptions): (string | undefined)[];
export {};
