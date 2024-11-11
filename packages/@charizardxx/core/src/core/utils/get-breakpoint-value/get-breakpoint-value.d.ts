import type { CharizardxxBreakpoint } from '../../CharizardxxProvider';
export type BreakpointsSource = Record<CharizardxxBreakpoint, number | string>;
export declare function getBreakpointValue(breakpoint: number | string, breakpoints: BreakpointsSource): number;
