import { keys, rem } from '../../utils';
import { getPrimaryContrastColor, getPrimaryShade } from '../color-functions';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
import { CharizardxxTheme } from '../theme.types';
import { getCSSColorVariables } from './get-css-color-variables';
import { isVirtualColor } from './virtual-color/virtual-color';

export type CSSVariablesResolver = (theme: CharizardxxTheme) => ConvertCSSVariablesInput;

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string
) {
  keys(sizes).forEach((size) => Object.assign(variables, { [`${name}-${size}`]: sizes[size] }));
}

export const defaultCssVariablesResolver: CSSVariablesResolver = (theme) => {
  const lightPrimaryShade = getPrimaryShade(theme, 'light');
  const defaultRadius =
    theme.defaultRadius in theme.radius
      ? theme.radius[theme.defaultRadius as 'xs']
      : rem(theme.defaultRadius);

  const result: ConvertCSSVariablesInput = {
    variables: {
      scale: theme.scale.toString(),
      'cursor-type': theme.cursorType,
      'color-scheme': 'light dark',
      'webkit-font-smoothing': theme.fontSmoothing ? 'antialiased' : 'unset',
      'moz-font-smoothing': theme.fontSmoothing ? 'grayscale' : 'unset',
      'color-white': theme.white,
      'color-black': theme.black,
      'line-height': theme.lineHeights.md,
      'font-family': theme.fontFamily,
      'font-family-monospace': theme.fontFamilyMonospace,
      'font-family-headings': theme.headings.fontFamily,
      'heading-font-weight': theme.headings.fontWeight,
      'heading-text-wrap': theme.headings.textWrap,
      'radius-default': defaultRadius,

      // Primary colors
      'primary-color-filled': `var(--charizardxx-color-${theme.primaryColor}-filled)`,
      'primary-color-filled-hover': `var(--charizardxx-color-${theme.primaryColor}-filled-hover)`,
      'primary-color-light': `var(--charizardxx-color-${theme.primaryColor}-light)`,
      'primary-color-light-hover': `var(--charizardxx-color-${theme.primaryColor}-light-hover)`,
      'primary-color-light-color': `var(--charizardxx-color-${theme.primaryColor}-light-color)`,

      // Gradient
      'gradient-from': theme.colors[theme.primaryColor][1],
      'gradient-to': theme.colors[theme.primaryColor][8],
      // @ts-ignore
      'gradient-deg': theme.defaultGradient.deg,
    },
    light: {
      'color-contrast': getPrimaryContrastColor(theme, 'light'),
      'color-bright': 'var(--charizardxx-color-black)',
      'color-text': theme.black,
      'color-body': theme.white,
      'color-error': 'var(--charizardxx-color-red-6)',
      'color-placeholder': 'var(--charizardxx-color-gray-5)',
      'color-anchor': `var(--charizardxx-color-${theme.primaryColor}-${lightPrimaryShade})`,
      'color-default': 'var(--charizardxx-color-white)',
      'color-default-hover': 'var(--charizardxx-color-gray-0)',
      'color-default-color': 'var(--charizardxx-color-black)',
      'color-default-border': 'var(--charizardxx-color-gray-4)',
      'color-dimmed': 'var(--charizardxx-color-gray-6)',
    },
    dark: {
      'color-contrast': getPrimaryContrastColor(theme, 'dark'),
      'color-bright': 'var(--charizardxx-color-white)',
      'color-text': 'var(--charizardxx-color-dark-0)',
      'color-body': 'var(--charizardxx-color-dark-7)',
      'color-error': 'var(--charizardxx-color-red-8)',
      'color-placeholder': 'var(--charizardxx-color-dark-3)',
      'color-anchor': `var(--charizardxx-color-${theme.primaryColor}-4)`,
      'color-default': 'var(--charizardxx-color-dark-6)',
      'color-default-hover': 'var(--charizardxx-color-dark-5)',
      'color-default-color': 'var(--charizardxx-color-white)',
      'color-default-border': 'var(--charizardxx-color-dark-4)',
      'color-dimmed': 'var(--charizardxx-color-dark-2)',
    },
  };

  assignSizeVariables(result.variables, theme.breakpoints, 'breakpoint');
  assignSizeVariables(result.variables, theme.spacing, 'spacing');
  assignSizeVariables(result.variables, theme.fontSizes, 'font-size');
  assignSizeVariables(result.variables, theme.lineHeights, 'line-height');
  assignSizeVariables(result.variables, theme.shadows, 'shadow');
  assignSizeVariables(result.variables, theme.radius, 'radius');

  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`color-${index}`] = `var(charizardxx-color-${theme.primaryColor}-${index})`;
  });

  keys(theme.colors).forEach((color) => {
    const value = theme.colors[color];

    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: 'light',
          withColorValues: true,
        })
      );

      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: 'dark',
          withColorValues: true,
        })
      );

      return;
    }

    value.forEach((shade, index) => {
      result.variables[`color-${color}-${index}`] = shade;
    });

    Object.assign(
      result.light,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: 'light',
        withColorValues: false,
      })
    );

    Object.assign(
      result.dark,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: 'dark',
        withColorValues: false,
      })
    );
  });

  const headings = theme.headings.sizes;

  keys(headings).forEach((heading) => {
    result.variables[`${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`${heading}-font-weight`] =
      headings[heading].fontWeight || theme.headings.fontWeight;
  });

  return result;
};
