import type {
  CharizardxxBreakpoint,
  CharizardxxColor,
  CharizardxxFontSize,
  CharizardxxLineHeight,
  CharizardxxSpacing,
} from '../../CharizardxxProvider';

export type StyleProp<Value> =
  | Value
  | Partial<Record<CharizardxxBreakpoint | (string & {}), Value>>;

export interface CharizardxxStyleProps {
  /** Margin, theme key: theme.spacing */
  m?: StyleProp<CharizardxxSpacing>;
  /** MarginBlock, theme key: theme.spacing */
  my?: StyleProp<CharizardxxSpacing>;
  /** MarginInline, theme key: theme.spacing */
  mx?: StyleProp<CharizardxxSpacing>;
  /** MarginTop, theme key: theme.spacing */
  mt?: StyleProp<CharizardxxSpacing>;
  /** MarginBottom, theme key: theme.spacing */
  mb?: StyleProp<CharizardxxSpacing>;
  /** MarginInlineStart, theme key: theme.spacing */
  ms?: StyleProp<CharizardxxSpacing>;
  /** MarginInlineEnd, theme key: theme.spacing */
  me?: StyleProp<CharizardxxSpacing>;
  /** MarginLeft, theme key: theme.spacing */
  ml?: StyleProp<CharizardxxSpacing>;
  /** MarginRight, theme key: theme.spacing */
  mr?: StyleProp<CharizardxxSpacing>;
  /** Padding, theme key: theme.spacing */

  p?: StyleProp<CharizardxxSpacing>;
  /** PaddingBlock, theme key: theme.spacing */
  py?: StyleProp<CharizardxxSpacing>;
  /** PaddingInline, theme key: theme.spacing */
  px?: StyleProp<CharizardxxSpacing>;
  /** PaddingTop, theme key: theme.spacing */
  pt?: StyleProp<CharizardxxSpacing>;
  /** PaddingBottom, theme key: theme.spacing */
  pb?: StyleProp<CharizardxxSpacing>;
  /** PaddingInlineStart, theme key: theme.spacing */
  ps?: StyleProp<CharizardxxSpacing>;
  /** PaddingInlineEnd, theme key: theme.spacing */
  pe?: StyleProp<CharizardxxSpacing>;
  /** PaddingLeft, theme key: theme.spacing */
  pl?: StyleProp<CharizardxxSpacing>;
  /** PaddingRight, theme key: theme.spacing */
  pr?: StyleProp<CharizardxxSpacing>;

  /** Border */
  bd?: StyleProp<React.CSSProperties['border']>;
  /** Background, theme key: theme.colors */
  bg?: StyleProp<CharizardxxColor>;
  /** Color */
  c?: StyleProp<CharizardxxColor>;
  opacity?: StyleProp<React.CSSProperties['opacity']>;

  /** FontFamily */
  ff?: StyleProp<'monospace' | 'text' | 'heading' | (string & {})>;
  /** FontSize, theme key: theme.fontSizes */
  fz?: StyleProp<CharizardxxFontSize | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})>;
  /** FontWeight */
  fw?: StyleProp<React.CSSProperties['fontWeight']>;
  /** LetterSpacing */
  lts?: StyleProp<React.CSSProperties['letterSpacing']>;
  /** TextAlign */
  ta?: StyleProp<React.CSSProperties['textAlign']>;
  /** LineHeight, theme key: lineHeights */
  lh?: StyleProp<CharizardxxLineHeight | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})>;
  /** FontStyle */
  fs?: StyleProp<React.CSSProperties['fontStyle']>;
  /** TextTransform */
  tt?: StyleProp<React.CSSProperties['textTransform']>;
  /** TextDecoration */
  td?: StyleProp<React.CSSProperties['textDecoration']>;

  /** Width, theme key: theme.spacing */
  w?: StyleProp<React.CSSProperties['width']>;
  /** MinWidth, theme key: theme.spacing*/
  miw?: StyleProp<React.CSSProperties['minWidth']>;
  /** MaxWidth, theme key: theme.spacing */
  maw?: StyleProp<React.CSSProperties['maxWidth']>;
  /** Height, theme key: theme.spacing */
  h?: StyleProp<React.CSSProperties['height']>;
  /** MinHeight, theme key: theme.spacing */
  mih?: StyleProp<React.CSSProperties['minHeight']>;
  /** MaxHeight, theme key: theme.spacing */
  mah?: StyleProp<React.CSSProperties['maxHeight']>;

  /** BackgroundSize */
  bgsz?: StyleProp<React.CSSProperties['backgroundSize']>;
  /** BackgroundPosition */
  bgp?: StyleProp<React.CSSProperties['backgroundPosition']>;
  /** BackgroundRepeat */
  bgr?: StyleProp<React.CSSProperties['backgroundRepeat']>;
  /** BackgroundAttachment */
  bga?: StyleProp<React.CSSProperties['backgroundAttachment']>;

  /** Position */
  pos?: StyleProp<React.CSSProperties['position']>;
  top?: StyleProp<React.CSSProperties['top']>;
  left?: StyleProp<React.CSSProperties['left']>;
  bottom?: StyleProp<React.CSSProperties['bottom']>;
  right?: StyleProp<React.CSSProperties['right']>;
  inset?: StyleProp<React.CSSProperties['inset']>;

  display?: StyleProp<React.CSSProperties['display']>;
  flex?: StyleProp<React.CSSProperties['flex']>;
}
