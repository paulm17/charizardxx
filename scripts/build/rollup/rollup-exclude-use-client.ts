// Files names that should not have use client directive at the top of the output file
export const ROLLUP_EXCLUDE_USE_CLIENT = [
  'index',
  'core/utils/deep-merge/deep-merge',
  'core/utils/units-converters/rem',
  'core/utils/units-converters/px',
  'core/factory/create-polymorphic-component',
  'core/CharizardxxProvider/create-theme/create-theme',
  'core/CharizardxxProvider/color-functions/darken/darken',
  'core/CharizardxxProvider/color-functions/lighten/lighten',
  'core/CharizardxxProvider/color-functions/rgba/rgba',
  'core/CharizardxxProvider/color-functions/to-rgba/to-rgba',
  'core/CharizardxxProvider/default-colors',
  'core/CharizardxxProvider/default-theme',
  'core/CharizardxxProvider/merge-charizardxx-theme/merge-charizardxx-theme',
  'core/CharizardxxProvider/CharizardxxCssVariables/virtual-color/virtual-color',
  'theme-to-vars',
].reduce<string[]>((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`, `${name}.cjs`);
  return acc;
}, []);
