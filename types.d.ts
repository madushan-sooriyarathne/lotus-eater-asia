declare global {
  type TextAlignment = "left" | "right" | "center" | "justify";

  interface Slides {
    img: {
      nextGen: string;
      fallback?: string;
    };
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
