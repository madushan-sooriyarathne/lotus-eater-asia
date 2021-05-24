const slides: Image[] = [
  {
    nextGen: "/assets/img/bg-boutique-87.avif",
    fallback: "/assets/img/bg-boutique-87.jpg",
  },
  {
    nextGen: "/assets/img/singhagiri-fireplace.avif",
    fallback: "/assets/img/singhagiri-fireplace.jpg",
  },
  {
    nextGen: "/assets/img/singhagiri-brunch.avif",
    fallback: "/assets/img/singhagiri-brunch.jpg",
  },
  {
    nextGen: "/assets/img/singhagiri-room.avif",
    fallback: "/assets/img/singhagiri-room.jpg",
  },
];

const hotelsSlider: SliderContent[] = [
  {
    primaryImage: {
      nextGen: "/assets/img/bg-boutique-87.avif",
      fallback: "/assets/img/bg-boutique-87.jpg",
      alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
    },
    secondaryImage: {
      nextGen: "/assets/img/singhagiri-brunch.avif",
      fallback: "/assets/img/singhagiri-brunch.jpg",
      alt: "Casa Heliconia Dining - Sri Lankan Luxury Boutique Hotel",
    },
    content: {
      description: `Casa Heliconia comprises four beautiful and eclectic pavilions set in
          manicured jungle within easy reach of Bandaranaike Airport. An ideal
          retreat for anyone seeking peace, tranquillity, and some idiosyncratic
          features in very private surroundings.`,
      title: "Casa Heliconia",
      subtitle: "Pasyala",
      route: "/hotels/casa-heliconia",
    },
  },
  {
    primaryImage: {
      nextGen: "/assets/img/bg-boutique-87.avif",
      fallback: "/assets/img/bg-boutique-87.jpg",
      alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
    },
    secondaryImage: {
      nextGen: "/assets/img/singhagiri-brunch.avif",
      fallback: "/assets/img/singhagiri-brunch.jpg",
      alt: "Casa Heliconia Dining - Sri Lankan Luxury Boutique Hotel",
    },
    content: {
      description: `Casa Heliconia comprises four beautiful and eclectic pavilions set in
          manicured jungle within easy reach of Bandaranaike Airport. An ideal
          retreat for anyone seeking peace, tranquillity, and some idiosyncratic
          features in very private surroundings.`,
      title: "Boutique 87",
      subtitle: "Bentota",
      route: "/hotels/casa-heliconia",
    },
  },
  {
    primaryImage: {
      nextGen: "/assets/img/bg-boutique-87.avif",
      fallback: "/assets/img/bg-boutique-87.jpg",
      alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
    },
    secondaryImage: {
      nextGen: "/assets/img/singhagiri-brunch.avif",
      fallback: "/assets/img/singhagiri-brunch.jpg",
      alt: "Casa Heliconia Dining - Sri Lankan Luxury Boutique Hotel",
    },
    content: {
      description: `Casa Heliconia comprises four beautiful and eclectic pavilions set in
          manicured jungle within easy reach of Bandaranaike Airport. An ideal
          retreat for anyone seeking peace, tranquillity, and some idiosyncratic
          features in very private surroundings.`,
      title: "SinghaGiri",
      subtitle: "Nuwara Eliya",
      route: "/hotels/casa-heliconia",
    },
  },
];

const hotels: Hotel[] = [
  {
    name: "Casa Heliconia",
    id: "casa-heliconia",
    rooms: [],
    experiences: [],
    description: "",
    images: [
      {
        nextGen: "/assets/img/bg-boutique-87.avif",
        fallback: "/assets/img/bg-boutique-87.jpg",
        alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
      },
    ],
    location: {
      address: "Kaleliya, Pasyala, Sri Lanka.",
      place: "Pasyala",
      coords: {
        lat: 22,
        lng: 22,
      },
    },
  },

  {
    name: "Boutique 87",
    id: "boutique-87",
    rooms: [],
    experiences: [],
    description: "",
    images: [
      {
        nextGen: "/assets/img/bg-boutique-87.avif",
        fallback: "/assets/img/bg-boutique-87.jpg",
        alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
      },
    ],
    location: {
      address: "No. 87, Galle Road, Bentota, Sri Lanka",
      place: "Bentota",
      coords: {
        lat: 22,
        lng: 22,
      },
    },
  },

  {
    name: "SinghaGiri",
    id: "singhagiri",
    rooms: [],
    experiences: [],
    description: "",
    images: [
      {
        nextGen: "/assets/img/singhagiri-brunch.avif",
        fallback: "/assets/img/singhagiri-brunch.jpg",
        alt: "Casa Heliconia Dining - Sri Lankan Luxury Boutique Hotel",
      },
    ],
    location: {
      address: "Nuwara Eliya, Sri Lanka.",
      place: "Nuwara Eliya",
      coords: {
        lat: 22,
        lng: 22,
      },
    },
  },
];

const offers: Offer[] = [
  {
    title: "3 for 2",
    description: "Stay 3 Nights for a price of 2 Nights",
    id: "3-for-2",
    image: {
      nextGen: "/assets/img/bg-boutique-87.avif",
      fallback: "/assets/img/bg-boutique-87.avif",
      alt: "Stay 3 Nights for price of 2 Nights offer cover image",
    },
    includes: [],
    terms: [],
    price: 180,
    discount: 10,
    currency: "USD",
    validTill: "31-12-2021",
  },
  {
    title: "Honeymoon Offer",
    description: "Book you honeymoon escape with our special honeymoon package",
    id: "honeymoon-offer",
    image: {
      nextGen: "/assets/img/singhagiri-brunch.avif",
      fallback: "/assets/img/singhagiri-brunch.avif",
      alt: "Stay 3 Nights for price of 2 Nights offer cover image",
    },
    includes: [],
    terms: [],

    validTill: "31-12-2021",
  },
  {
    title: "Early Bird Offer",
    description:
      "Book before 31st of August to enjoy 20% off in All Properties",
    id: "early-bird",
    image: {
      nextGen: "/assets/img/singhagiri-room.avif",
      fallback: "/assets/img/singhagiri-room.avif",
      alt: "Stay 3 Nights for price of 2 Nights offer cover image",
    },
    includes: [],
    terms: [],
    discount: 20,
    validTill: "31-12-2021",
  },
];

export { slides, hotelsSlider, hotels, offers };
