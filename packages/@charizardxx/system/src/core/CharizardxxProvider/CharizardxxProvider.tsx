import { ThemeProvider } from 'next-themes';
import { defaultCssVariablesResolver } from './CharizardxxCssVariables';
// import type { CharizardxxColorScheme, CharizardxxThemeOverride } from "./theme.types";
import { DEFAULT_THEME } from './default-theme';
import { suppressNextjsWarning } from './suppress-nextjs-warning';

import './global.css';

import { CharizardxxTheme } from './theme.types';
import { useRespectReduceMotion } from './use-respect-reduce-motion';

export interface CharizardxxStylesTransform {
  sx?: () => (sx: any) => string;
  styles?: () => (styles: any, payload: any) => Record<string, string>;
}

export interface CharizardxxProviderProps {
  /** Function to resolve root element to set `data-charizardxx-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?: () => HTMLElement | undefined;

  /** Store theme in local storage */
  themeStorageKey?: string;

  /** Your application */
  children?: React.ReactNode;

  /** An object to transform `styles` and `sx` props into css classes, can be used with CSS-in-JS libraries */
  stylesTransform?: CharizardxxStylesTransform;
}

suppressNextjsWarning();

export function CharizardxxProvider({
  children,
  themeStorageKey = 'charizardxx-color-scheme',
  stylesTransform,
}: CharizardxxProviderProps) {

  // @ts-ignore
  (window as any).charizardxx_styles_transform = stylesTransform;

  return (
    <ThemeProvider
      storageKey={themeStorageKey}
      themes={['light', 'dark']}
      attribute={`data-${themeStorageKey}`}
      enableColorScheme
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
