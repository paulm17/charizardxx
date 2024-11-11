import { css, Global as EmotionGlobal } from '@emotion/react';
import { CharizardxxTheme, useCharizardxxTheme } from '@charizardxx/core';
import type { CSSObject } from './types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: CharizardxxTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useCharizardxxTheme();
  return (
    <EmotionGlobal styles={css((typeof styles === 'function' ? styles(theme) : styles) as any)} />
  );
}
