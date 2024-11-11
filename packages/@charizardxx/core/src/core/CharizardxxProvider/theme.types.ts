import type { PartialDeep } from 'type-fest';
import type { VariantColorsResolver } from './color-functions';

export interface CharizardxxTheme {
  /** Controls focus ring styles. Supports the following options:
   *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
   *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
   *  - `never` – focus ring is always hidden (not recommended)
   */
  focusRing: 'auto' | 'always' | 'never';

  /** Rem units scale, change if you customize font-size of `<html />` element
   *  default value is `1` (for `100%`/`16px` font-size on `<html />`)
   */
  scale: number;

  /** Determines whether `font-smoothing` property should be set on the body, `true` by default */
  fontSmoothing: boolean;

  /** White color */
  white: string;

  /** Black color */
  black: string;

  /** Object of colors, key is color name, value is an array of at least 10 strings (colors) */
  colors: CharizardxxThemeColors;

  /** Index of theme.colors[color].
   *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
   *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
   *  Default value `{ light: 6, dark: 8 }`
   *
   *  For example,
   *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
   *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
   * */
  primaryShade: CharizardxxColorShade | CharizardxxPrimaryShade;

  /** Key of `theme.colors`, hex/rgb/hsl values are not supported.
   *  Determines which color will be used in all components by default.
   *  Default value – `blue`.
   * */
  primaryColor: string;

  /** Function to resolve colors based on variant.
   *  Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`
   *  and other components that use colors from theme.
   * */
  variantColorResolver: VariantColorsResolver;

  /** Determines whether text color must be changed based on the given `color` prop in filled variant
   *  For example, if you pass `color="blue.1"` to Button component, text color will be changed to `var(--charizardxx-color-black)`
   *  Default value – `false`
   * */
  autoContrast: boolean;

  /** Determines which luminance value is used to determine if text color should be light or dark.
   *  Used only if `theme.autoContrast` is set to `true`.
   *  Default value is `0.3`
   * */
  luminanceThreshold: number;

  /** Font-family used in all components, system fonts by default */
  fontFamily: string;

  /** Monospace font-family, used in code and other similar components, system fonts by default  */
  fontFamilyMonospace: string;

  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */
  headings: {
    fontFamily: string;
    fontWeight: string;
    textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  /** Object of values that are used to set `border-radius` in all components that support it */
  radius: CharizardxxRadiusValues;

  /** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
  defaultRadius: CharizardxxRadius;

  /** Object of values that are used to set various CSS properties that control spacing between elements */
  spacing: CharizardxxSpacingValues;

  /** Object of values that are used to control `font-size` property in all components */
  fontSizes: CharizardxxFontSizesValues;

  /** Object of values that are used to control `line-height` property in `Text` component */
  lineHeights: CharizardxxLineHeightValues;

  /** Object of values that are used to control breakpoints in all components,
   *  values are expected to be defined in em
   * */
  breakpoints: CharizardxxBreakpointsValues;

  /** Object of values that are used to add `box-shadow` styles to components that support `shadow` prop */
  shadows: CharizardxxShadowsValues;

  /** Determines whether user OS settings to reduce motion should be respected, `false` by default */
  respectReducedMotion: boolean;

  /** Determines which cursor type will be used for interactive elements
   * - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
   * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
   */
  cursorType: 'default' | 'pointer';

  /** Default gradient configuration for components that support `variant="gradient"` */
  defaultGradient: CharizardxxGradient;

  /** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */
  activeClassName: string;

  /** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
   *  Overrides `theme.focusRing` property.
   */
  focusClassName: string;

  /** Allows adding `classNames`, `styles` and `defaultProps` to any component */
  components: CharizardxxThemeComponents;

  /** Any other properties that you want to access with the theme objects */
  other: CharizardxxThemeOther;
}

export type CharizardxxColorScheme = 'light' | 'dark' | 'auto';

export type CharizardxxThemeOverride = PartialDeep<CharizardxxTheme>;

export type CharizardxxStylesRecord = Record<string, React.CSSProperties>;

export interface CharizardxxThemeComponent {
  // classNames?: any;
  styles?: any;
  vars?: any;
  defaultProps?: any;
}

export type CharizardxxThemeComponents = Record<string, CharizardxxThemeComponent>;

export interface HeadingStyle {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

export type CharizardxxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CharizardxxBreakpointsValues = Record<CharizardxxSize | (string & {}), string>;
export type CharizardxxFontSizesValues = Record<CharizardxxSize | (string & {}), string>;
export type CharizardxxRadiusValues = Record<CharizardxxSize | (string & {}), string>;
export type CharizardxxSpacingValues = Record<CharizardxxSize | (string & {}), string>;
export type CharizardxxShadowsValues = Record<CharizardxxSize | (string & {}), string>;
export type CharizardxxLineHeightValues = Record<CharizardxxSize | (string & {}), string>;

export type CharizardxxBreakpoint = keyof CharizardxxBreakpointsValues;
export type CharizardxxFontSize = keyof CharizardxxFontSizesValues;
export type CharizardxxRadius = keyof CharizardxxRadiusValues | (string & {}) | number;
export type CharizardxxSpacing = keyof CharizardxxSpacingValues | (string & {}) | number;
export type CharizardxxShadow = keyof CharizardxxShadowsValues | (string & {});
export type CharizardxxLineHeight = keyof CharizardxxLineHeightValues;

export interface CharizardxxThemeOther {
  [key: string]: any;
}

export interface CharizardxxGradient {
  from: string;
  to: string;
  deg?: number;
}

export type CharizardxxColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[],
];

export type CharizardxxColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface CharizardxxPrimaryShade {
  light: CharizardxxColorShade;
  dark: CharizardxxColorShade;
}

export type DefaultCharizardxxColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {});

export interface CharizardxxThemeColorsOverride {}

export type CharizardxxThemeColors = CharizardxxThemeColorsOverride extends {
  colors: Record<infer CustomColors, CharizardxxColorsTuple>;
}
  ? Record<CustomColors, CharizardxxColorsTuple>
  : Record<DefaultCharizardxxColor, CharizardxxColorsTuple>;

export type CharizardxxColor = keyof CharizardxxThemeColors;
