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
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    gradients: {
      heroOverlay: string;
      headingClip: string;
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
    headingClip: `linear-gradient(135deg, #fddb92 10%, #d1fdff 100%)`,
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.25)",
  },
};

export default theme;
