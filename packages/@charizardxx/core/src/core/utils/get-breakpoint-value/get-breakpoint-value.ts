import type { CharizardxxBreakpoint } from '../../CharizardxxProvider';
import { px } from '../units-converters';

export type BreakpointsSource = Record<CharizardxxBreakpoint, number | string>;

export function getBreakpointValue(breakpoint: number | string, breakpoints: BreakpointsSource) {
  if (breakpoint in breakpoints) {
    return px(breakpoints[breakpoint as CharizardxxBreakpoint]) as number;
  }

  return px(breakpoint) as number;
}
