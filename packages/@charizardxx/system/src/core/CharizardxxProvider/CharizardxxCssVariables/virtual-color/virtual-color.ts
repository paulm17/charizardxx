import { colorsTuple } from '../../color-functions';
import { CharizardxxColor, CharizardxxColorsTuple } from '../../theme.types';

interface VirtualColorInput {
  dark: CharizardxxColor;
  light: CharizardxxColor;
  name: string;
}

type VirtualColor = CharizardxxColorsTuple & {
  'charizardxx-virtual-color': true;
  name: string;
  dark: CharizardxxColor;
  light: CharizardxxColor;
};

export function virtualColor(input: VirtualColorInput): CharizardxxColorsTuple {
  const result = colorsTuple(
    Array.from({ length: 10 }).map((_, i) => `var(--charizardxx-color-${input.name}-${i})`)
  );

  Object.defineProperty(result, 'charizardxx-virtual-color', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: true,
  });

  Object.defineProperty(result, 'dark', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.dark,
  });

  Object.defineProperty(result, 'light', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.light,
  });

  Object.defineProperty(result, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.name,
  });

  return result;
}

export function isVirtualColor(value: unknown): value is VirtualColor {
  return !!value && typeof value === 'object' && 'charizardxx-virtual-color' in value;
}
