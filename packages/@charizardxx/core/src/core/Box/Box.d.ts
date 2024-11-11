import React from 'react';
import { CharizardxxBreakpoint } from '../CharizardxxProvider';
import type { CharizardxxStyleProp, CssVarsProp } from './Box.types';
import { CharizardxxStyleProps } from './style-props';
export type Mod = Record<string, any> | string;
export type BoxMod = Mod | Mod[] | BoxMod[];
export interface BoxProps extends CharizardxxStyleProps {
    /** Class added to root element, if applicable */
    className?: string;
    /** Inline style added to root component element, can subscribe to theme defined on CharizardxxProvider */
    style?: CharizardxxStyleProp;
    /** CSS variables defined on root component element */
    __vars?: CssVarsProp;
    /** `size` property passed down the HTML element */
    __size?: string;
    /** Breakpoint above which the component is hidden with `display: none` */
    hiddenFrom?: CharizardxxBreakpoint;
    /** Breakpoint below which the component is hidden with `display: none` */
    visibleFrom?: CharizardxxBreakpoint;
    /** Determines whether component should be hidden in light color scheme with `display: none` */
    lightHidden?: boolean;
    /** Determines whether component should be hidden in dark color scheme with `display: none` */
    darkHidden?: boolean;
    /** Element modifiers transformed into `data-` attributes, for example, `{ 'data-size': 'xl' }`, falsy values are removed */
    mod?: BoxMod;
}
export type ElementProps<ElementType extends React.ElementType, PropsToOmit extends string = never> = Omit<React.ComponentPropsWithoutRef<ElementType>, 'style' | PropsToOmit>;
export interface BoxComponentProps extends BoxProps {
    /** Variant passed from parent component, sets `data-variant` */
    variant?: string;
    /** Size passed from parent component, sets `data-size` if value is not number like */
    size?: string | number;
}
export declare const Box: (<C = "div">(props: import("../factory").PolymorphicComponentProps<C, BoxComponentProps>) => React.ReactElement) & Omit<React.FunctionComponent<(BoxComponentProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BoxComponentProps> & {
    ref?: any;
    renderRoot?: (props: any) => any;
}) | (BoxComponentProps & {
    component: React.ElementType;
    renderRoot?: (props: Record<string, any>) => any;
})>, never> & Record<string, never>;
