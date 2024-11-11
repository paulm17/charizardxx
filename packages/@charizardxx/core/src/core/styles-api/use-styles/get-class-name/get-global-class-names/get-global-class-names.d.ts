import { CharizardxxTheme } from '../../../../CharizardxxProvider';
import { GetStylesApiOptions } from '../../../styles-api.types';
interface GetGlobalClassNamesOptions {
    theme: CharizardxxTheme;
    unstyled: boolean | undefined;
    options: GetStylesApiOptions | undefined;
}
export declare const FOCUS_CLASS_NAMES: {
    readonly always: "charizardxx-focus-always";
    readonly auto: "charizardxx-focus-auto";
    readonly never: "charizardxx-focus-never";
};
/** Returns classes that are defined globally (focus and active styles) based on options */
export declare function getGlobalClassNames({ theme, options, unstyled }: GetGlobalClassNamesOptions): string;
export {};
