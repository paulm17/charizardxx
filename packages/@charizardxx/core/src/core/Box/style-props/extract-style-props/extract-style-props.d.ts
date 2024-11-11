import type { CharizardxxStyleProps } from '../style-props.types';
export declare function extractStyleProps<T extends Record<string, any>>(others: CharizardxxStyleProps & T): {
    styleProps: CharizardxxStyleProps & {
        sx?: any;
    };
    rest: T;
};
