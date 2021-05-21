declare global {
  type TextAlignment = "left" | "right" | "center" | "justify";

  interface Image {
    nextGen: string;
    fallback: string;
    alt?: string;
  }
}

export {};
