import { CSSProperties } from 'react';
import { CharizardxxStyleProp } from '../../../Box';
import { CharizardxxTheme } from '../../../CharizardxxProvider';
import { GetStylesApiOptions } from '../../styles-api.types';
import { VarsResolver } from './resolve-vars/resolve-vars';
export type _Styles = undefined | Partial<Record<string, CSSProperties>> | ((theme: CharizardxxTheme, props: Record<string, any>, ctx: Record<string, any> | undefined) => Partial<Record<string, CSSProperties>>);
export interface GetStyleInput {
    theme: CharizardxxTheme;
    themeName: string[];
    selector: string;
    rootSelector: string;
    options: GetStylesApiOptions | undefined;
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
    styles: _Styles;
    style: CharizardxxStyleProp | undefined;
    vars: VarsResolver | undefined;
    varsResolver: VarsResolver | undefined;
    withStylesTransform?: boolean;
}
export declare function getStyle({ theme, themeName, selector, options, props, stylesCtx, rootSelector, styles, style, vars, varsResolver, withStylesTransform, }: GetStyleInput): CSSProperties;
