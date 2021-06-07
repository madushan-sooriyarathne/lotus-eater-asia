import { emitWarning } from "process";
import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      whiteTransparent: string;
      black: string;
      blackLight: string;
      primary: string;
      primaryMedium: string;
      primaryLight: string;
      secondary: string;
      secondaryMedium: string;
      secondaryLight: string;
      danger: string;
      warning: string;
      success: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    gradients: {
      heroOverlay: string;
      textLight: string;
      textDark: string;
      textBlack: string;
    };
    shadows: {
      close: string;
      spread: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    white: "#fff",
    whiteTransparent: "rgba(225, 225, 225, 0.5)",
    black: "#231a15",
    blackLight: "#655f5b",
    primary: "#ae8367",
    primaryMedium: "#ceb5a4",
    primaryLight: "#efe6e1",
    secondary: "#ffbe1c",
    secondaryMedium: "#ffdf8e",
    secondaryLight: "#fff8e6",
    success: "#62a844",
    warning: "#f0c220",
    danger: "#e24444",
  },

  fonts: {
    primary:
      "'Inter',  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    secondary: "'Cormorant Garamond', Georgia, 'Times New Roman', Times, serif",
  },
  gradients: {
    heroOverlay: `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  )`,
    textLight: `linear-gradient(135deg, #fddb92 10%, #d1fdff 100%)`,
    textDark: `linear-gradient(to top, #200122, #6f0000)`,
    textBlack: `linear-gradient(to top, #0f2027, #203a43, #2c5364)`,
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
};

export default theme;
