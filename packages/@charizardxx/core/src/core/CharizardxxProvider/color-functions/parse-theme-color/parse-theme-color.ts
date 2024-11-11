import type { CssVariable } from '../../../Box';
import type {
  CharizardxxColorScheme,
  CharizardxxColorShade,
  CharizardxxTheme,
} from '../../theme.types';
import { getPrimaryShade } from '../get-primary-shade/get-primary-shade';
import { isLightColor } from '../luminance/luminance';

interface ParseThemeColorOptions {
  color: unknown;
  theme: CharizardxxTheme;
  colorScheme?: CharizardxxColorScheme;
}

interface ParseThemeColorResult {
  color: string;
  value: string;
  shade: CharizardxxColorShade | undefined;
  variable: CssVariable | undefined;
  isThemeColor: boolean;
  isLight: boolean;
}

export function parseThemeColor({
  color,
  theme,
  colorScheme,
}: ParseThemeColorOptions): ParseThemeColorResult {
  if (typeof color !== 'string') {
    throw new Error(
      `[@charizardxx/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
    );
  }

  if (color === 'bright') {
    return {
      color,
      value: colorScheme === 'dark' ? theme.white : theme.black,
      shade: undefined,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === 'dark' ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: '--charizardxx-color-bright',
    };
  }

  if (color === 'dimmed') {
    return {
      color,
      value: colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      shade: undefined,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        theme.luminanceThreshold
      ),
      variable: '--charizardxx-color-dimmed',
    };
  }

  if (color === 'white' || color === 'black') {
    return {
      color,
      value: color === 'white' ? theme.white : theme.black,
      shade: undefined,
      isThemeColor: false,
      isLight: isLightColor(
        color === 'white' ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: `--charizardxx-color-${color}`,
    };
  }

  const [_color, shade] = color.split('.');
  const colorShade = shade ? (Number(shade) as CharizardxxColorShade) : undefined;
  const isThemeColor = _color in theme.colors;

  if (isThemeColor) {
    const colorValue =
      colorShade !== undefined
        ? theme.colors[_color][colorShade]
        : theme.colors[_color][getPrimaryShade(theme, colorScheme || 'light')];

    return {
      color: _color,
      value: colorValue,
      shade: colorShade,
      isThemeColor,
      isLight: isLightColor(colorValue, theme.luminanceThreshold),
      variable: shade
        ? `--charizardxx-color-${_color}-${colorShade}`
        : `--charizardxx-color-${_color}-filled`,
    };
  }

  return {
    color,
    value: color,
    isThemeColor,
    isLight: isLightColor(color, theme.luminanceThreshold),
    shade: colorShade,
    variable: undefined,
  };
}
