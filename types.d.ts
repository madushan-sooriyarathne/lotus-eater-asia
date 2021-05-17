declare global {
  type TextAlignment = "left" | "right" | "center" | "justify";

  interface Slides {
    img: string;
    content?: {
      heading: string;
      paragraph: string;
      button?: {
        text: string;
        route: string;
      };
      pos: {
        col: number;
        row: number;
      };
    };
  }
}

export {};
