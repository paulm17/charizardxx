import React from 'react';
import { InlineStylesInput, stylesToString } from './styles-to-string/styles-to-string';

// import { useCharizardxxStyleNonce } from '../CharizardxxProvider';

export interface InlineStylesProps
  extends InlineStylesInput,
    Omit<React.ComponentPropsWithoutRef<'style'>, keyof InlineStylesInput> {}

export function InlineStyles({ selector, styles, media }: InlineStylesInput) {
  // const nonce = undefined //useCharizardxxStyleNonce();
  return (
    <style
      data-charizardxx-styles="inline"
      // nonce={nonce?.()}
      dangerouslySetInnerHTML={{
        __html: stylesToString({ selector, styles, media }),
      }}
    />
  );
}
