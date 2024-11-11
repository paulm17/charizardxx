import { CharizardxxTheme } from '../../../CharizardxxProvider';
import type { SystemPropData } from '../style-props-data';
import type { CharizardxxStyleProps } from '../style-props.types';
import { SortMediaQueriesResult } from './sort-media-queries';
interface ParseStylePropsOptions {
    styleProps: CharizardxxStyleProps;
    theme: CharizardxxTheme;
    data: Record<string, SystemPropData>;
}
export interface ParseStylePropsResult {
    hasResponsiveStyles: boolean;
    inlineStyles: React.CSSProperties;
    styles: React.CSSProperties;
    media: Record<string, React.CSSProperties>;
}
export declare function parseStyleProps({ styleProps, data, theme, }: ParseStylePropsOptions): SortMediaQueriesResult;
export {};
