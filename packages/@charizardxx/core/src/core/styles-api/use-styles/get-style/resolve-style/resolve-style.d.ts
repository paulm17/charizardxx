import { CSSProperties } from 'react';
import { CharizardxxStyleProp } from '../../../../Box';
import { CharizardxxTheme } from '../../../../CharizardxxProvider';
interface ResolveStyleInput {
    style: CharizardxxStyleProp | undefined;
    theme: CharizardxxTheme;
}
export declare function resolveStyle({ style, theme }: ResolveStyleInput): CSSProperties;
export {};
