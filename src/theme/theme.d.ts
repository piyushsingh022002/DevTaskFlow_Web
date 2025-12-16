// Type augmentation for styled-components theme
import "styled-components";
import type { lightTheme } from "./theme";

type AppTheme = typeof lightTheme;

declare module "styled-components" {
  // Mirror the shape of our theme objects so `props.theme` is fully typed
  export interface DefaultTheme {
    background: AppTheme["background"];
    text: AppTheme["text"];
    cardBackground: AppTheme["cardBackground"];
    primary: AppTheme["primary"];
    secondary: AppTheme["secondary"];
  }
}
