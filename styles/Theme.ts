import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    white: "#fff",
    black: "#000",
  },
  fonts: {
    primary:
      "'GothamPro',  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    secondary: "'QuestaGrande', Georgia, 'Times New Roman', Times, serif",
  },
};

export default theme;
