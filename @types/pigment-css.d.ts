// any file that is included in your tsconfig.json
import type { ExtendTheme } from "@pigment-css/react/theme";
import type { CharizardxxThemeColors } from "../packages/@charizardxx/core";

declare module "@pigment-css/react/theme" {
  interface ThemeTokens {
    // the structure of your theme
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: ThemeTokens;
      colors: CharizardxxThemeColors;
    }>;
  }
}
