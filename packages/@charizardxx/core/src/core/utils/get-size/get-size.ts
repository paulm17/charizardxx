import { isNumberLike } from '../is-number-like/is-number-like';
import { rem } from '../units-converters';

export function getSize(size: unknown, prefix = 'size', convertToRem = true): string | undefined {
  if (size === undefined) {
    return undefined;
  }

  return isNumberLike(size)
    ? convertToRem
      ? rem(size)
      : (size as string)
    : `var(--${prefix}-${size})`;
}

export function getSpacing(size: unknown) {
  return getSize(size, 'charizardxx-spacing');
}

export function getRadius(size: unknown) {
  if (size === undefined) {
    return 'var(--charizardxx-radius-default)';
  }

  return getSize(size, 'charizardxx-radius');
}

export function getFontSize(size: unknown) {
  return getSize(size, 'charizardxx-font-size');
}

export function getLineHeight(size: unknown) {
  return getSize(size, 'charizardxx-line-height', false);
}

export function getShadow(size: unknown) {
  if (!size) {
    return undefined;
  }

  return getSize(size, 'charizardxx-shadow', false);
}
