declare global {
  type TextAlignment = "left" | "right" | "center" | "justify";

  interface Image {
    nextGen: string;
    fallback: string;
    alt?: string;
  }

  interface Room {
    name: string;
    id: string;
    images: Image[];
    description: string;
    beds: string;
    size: string;
    features: string[];
  }

  interface Experience {
    name: string;
    id: string;
    description: string;
    images: Image[];
  }

  interface Hotel {
    name: string;
    id: string;
    description: string;
    rooms: Room[];
    experiences: Experience[];
    images: Image[];
    location: {
      place: string;
      address: string;
      coords: {
        lng: number;
        lat: number;
      };
    };
  }

  interface SliderContent {
    primaryImage: Image;
    secondaryImage: Image;
    content: {
      title: string;
      subtitle: string;
      description: string;
      route: string;
    };
  }
}

export {};
