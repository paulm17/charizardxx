import { CSSObject } from '@emotion/serialize';
import {
  CharizardxxBreakpoint,
  CharizardxxTheme,
  em,
  px,
  useCharizardxxTheme,
} from '@charizardxx/core';
// prettier-ignore
import { useCss } from './use-css';

export function getStylesRef(refName: string) {
  return `___ref-${refName || ''}`;
}

function getBreakpointValue(theme: CharizardxxTheme, breakpoint: CharizardxxBreakpoint | number) {
  return breakpoint in theme.breakpoints && typeof breakpoint !== 'number'
    ? (px(theme.breakpoints[breakpoint]) as number)
    : (px(breakpoint) as number);
}

export const getHelpers = (theme: CharizardxxTheme) => ({
  light: '[data-charizardxx-color-scheme="light"] &',
  dark: '[data-charizardxx-color-scheme="dark"] &',
  rtl: '[dir="rtl"] &',
  ltr: '[dir="ltr"] &',
  notRtl: '[dir="ltr"] &',
  notLtr: '[dir="rtl"] &',
  ref: getStylesRef,
  smallerThan: (breakpoint: CharizardxxBreakpoint | number) =>
    `@media (max-width: ${em(getBreakpointValue(theme, breakpoint) - 0.1)})`,
  largerThan: (breakpoint: CharizardxxBreakpoint | number) =>
    `@media (min-width: ${em(getBreakpointValue(theme, breakpoint))})`,
});

export type EmotionHelpers = ReturnType<typeof getHelpers>;

export function createStyles<
  Key extends string = string,
  Params = void,
  Input extends Record<Key, CSSObject> = Record<Key, CSSObject>,
>(input: ((theme: CharizardxxTheme, params: Params, helpers: EmotionHelpers) => Input) | Input) {
  const getCssObject = typeof input === 'function' ? input : () => input;

  return function useStyles(params: Params) {
    const theme = useCharizardxxTheme();
    const helpers = getHelpers(theme);
    const cssObject: Record<string, any> = getCssObject(theme, params, helpers);
    const { css, cx } = useCss();
    const classes = Object.keys(cssObject).reduce<Record<string, string>>((acc, key) => {
      acc[key] = css(cssObject[key]);
      return acc;
    }, {}) as Record<keyof Input, string>;

    return { classes, cx, theme };
  };
}
