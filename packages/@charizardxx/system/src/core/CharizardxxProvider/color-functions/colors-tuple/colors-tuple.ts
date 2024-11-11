import { CharizardxxColorsTuple } from '../../theme.types';

export function colorsTuple(input: string | string[]): CharizardxxColorsTuple {
  if (Array.isArray(input)) {
    return input as unknown as CharizardxxColorsTuple;
  }

  return Array(10).fill(input) as unknown as CharizardxxColorsTuple;
}
