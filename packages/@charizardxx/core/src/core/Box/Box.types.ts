import type { CharizardxxTheme } from '../CharizardxxProvider';

export interface CSSProperties extends React.CSSProperties {
  [key: string]: any;
}

type CharizardxxStyle = CSSProperties | ((theme: CharizardxxTheme) => CSSProperties);
export type CharizardxxStyleProp =
  | CharizardxxStyle
  | CharizardxxStyle[]
  | CharizardxxStyleProp[]
  | undefined;

export type CssVariable = `--${string}`;

export type CssVariables<Variable extends string = CssVariable> = Partial<Record<Variable, string>>;

export type CssVars<Variable extends string = CssVariable> =
  | CssVariables<Variable>
  | ((theme: CharizardxxTheme) => CssVariables<Variable>)
  | CssVars<Variable>[];

export type CssVarsProp<Variable extends string = CssVariable> =
  | CssVars<Variable>
  | CssVars<Variable>[];
