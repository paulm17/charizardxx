import type { StylePropType } from './resolvers';
import type { CharizardxxStyleProps } from './style-props.types';
export interface SystemPropData {
    type: StylePropType;
    property: string | string[];
}
export declare const STYlE_PROPS_DATA: Record<keyof CharizardxxStyleProps, SystemPropData>;
