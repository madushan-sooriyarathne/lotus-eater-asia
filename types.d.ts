import { FormEvent } from "react";

declare global {
  type TextAlignment = "left" | "right" | "center" | "justify";
  type FlexAlignment = "flex-start" | "center" | "flex-end";

  interface Image {
    src: string;
    blurUrl?: string;
    alt?: string;
  }

  interface Room {
    name: string;
    id: string;
    images: Image[];
    description: string;
    beds: string;
    size: number;
    features: string[];
    currency: "USD" | "LKR";
    bar: number;
  }

  interface Experience {
    name: string;
    id: string;
    description: string;
    images: Image[];
  }

  interface Offer {
    title: string;
    id: string;
    description: string;
    image: Image;
    includes: string[];
    terms: string[];
    price?: number;
    discount?: number;
    currency?: string;
    validTill: string;
  }

  interface Hotel {
    name: string;
    id: string;
    description: string;
    rooms: Room[];
    experiences: Experience[];
    images: Image[];
    offers?: Offer[];
    location: {
      place: string;
      address: string;
      coords: {
        lng: number;
        lat: number;
      };
    };
  }

  interface NavLink {
    name: string;
    route: string;
  }

  interface SocialIcon {
    name: string;
    link: string;
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

  type InputEventType = FormEvent<HTMLInputElement | HTMLTextAreaElement>;
}

export {};
