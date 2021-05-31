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
    rooms: [
      {
        bar: 150,
        beds: "King Size Double Bed",
        currency: "USD",
        description:
          "Situated in direct view of the adjoining Buddhist temple with its pristine white stupa, this chalet takes inspiration from the jungle temples of Cambodia.",
        features: [
          "Air Conditions",
          "Overhead Fan",
          "Free WiFi",
          "Room Service",
          "Rain Shower",
        ],
        id: "temple-angkor",
        images: [
          {
            nextGen: "/assets/img/bg-boutique-87.avif",
            fallback: "/assets/img/bg-boutique-87.jpg",
            alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
          },
          {
            nextGen: "/assets/img/singhagiri-fireplace.avif",
            fallback: "/assets/img/singhagiri-fireplace.jpg",
          },
        ],
        name: "Temple Angkor",
        size: 90,
      },
      {
        bar: 130,
        beds: "King Size Double Bed",
        currency: "USD",
        description:
          "Slightly smaller and located closer to the pool pavilion, this chalet consists of a bedroom that leads to a spacious open-sided terrace immersed in nature.",
        features: [
          "Air Conditions",
          "Overhead Fan",
          "Free WiFi",
          "Room Service",
          "Rain Shower",
        ],
        id: "pagoda-gold",
        images: [
          {
            nextGen: "/assets/img/bg-boutique-87.avif",
            fallback: "/assets/img/bg-boutique-87.jpg",
            alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
          },
          {
            nextGen: "/assets/img/singhagiri-fireplace.avif",
            fallback: "/assets/img/singhagiri-fireplace.jpg",
          },
        ],
        name: "Pagoda Gold",
        size: 60,
      },
    ],
    experiences: [],
    description: `Casa Heliconia comprises four beautiful and eclectic pavilions set in manicured jungle within easy reach of Bandaranaike Airport. An ideal retreat for anyone seeking peace, tranquillity, and some idiosyncratic features in very private surroundings.`,
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
        lng: 80.102867,
        lat: 7.190211,
      },
    },
  },

  {
    name: "Boutique 87",
    id: "boutique-87",
    rooms: [
      {
        bar: 150,
        beds: "King Size Double Bed",
        currency: "USD",
        description:
          "Situated in direct view of the adjoining Buddhist temple with its pristine white stupa, this chalet takes inspiration from the jungle temples of Cambodia.",
        features: [
          "Air Conditions",
          "Overhead Fan",
          "Free WiFi",
          "Room Service",
          "Rain Shower",
        ],
        id: "temple-angkor",
        images: [
          {
            nextGen: "/assets/img/bg-boutique-87.avif",
            fallback: "/assets/img/bg-boutique-87.jpg",
            alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
          },
          {
            nextGen: "/assets/img/singhagiri-fireplace.avif",
            fallback: "/assets/img/singhagiri-fireplace.jpg",
          },
        ],
        name: "Temple Angkor",
        size: 90,
      },
      {
        bar: 130,
        beds: "King Size Double Bed",
        currency: "USD",
        description:
          "Slightly smaller and located closer to the pool pavilion, this chalet consists of a bedroom that leads to a spacious open-sided terrace immersed in nature.",
        features: [
          "Air Conditions",
          "Overhead Fan",
          "Free WiFi",
          "Room Service",
          "Rain Shower",
        ],
        id: "pagoda-gold",
        images: [
          {
            nextGen: "/assets/img/bg-boutique-87.avif",
            fallback: "/assets/img/bg-boutique-87.jpg",
            alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
          },
          {
            nextGen: "/assets/img/singhagiri-fireplace.avif",
            fallback: "/assets/img/singhagiri-fireplace.jpg",
          },
        ],
        name: "Pagoda Gold",
        size: 60,
      },
    ],
    experiences: [],
    description: `Casa Heliconia comprises four beautiful and eclectic pavilions set in manicured jungle within easy reach of Bandaranaike Airport. An ideal retreat for anyone seeking peace, tranquillity, and some idiosyncratic features in very private surroundings.`,
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
        lng: 80.001047,
        lat: 6.41362,
      },
    },
  },

  {
    name: "SinghaGiri",
    id: "singhagiri",
    rooms: [
      {
        bar: 150,
        beds: "King Size Double Bed",
        currency: "USD",
        description:
          "Situated in direct view of the adjoining Buddhist temple with its pristine white stupa, this chalet takes inspiration from the jungle temples of Cambodia.",
        features: [
          "Air Conditions",
          "Overhead Fan",
          "Free WiFi",
          "Room Service",
          "Rain Shower",
        ],
        id: "temple-angkor",
        images: [
          {
            nextGen: "/assets/img/bg-boutique-87.avif",
            fallback: "/assets/img/bg-boutique-87.jpg",
            alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
          },
          {
            nextGen: "/assets/img/singhagiri-fireplace.avif",
            fallback: "/assets/img/singhagiri-fireplace.jpg",
          },
        ],
        name: "Temple Angkor",
        size: 90,
      },
      {
        bar: 130,
        beds: "King Size Double Bed",
        currency: "USD",
        description:
          "Slightly smaller and located closer to the pool pavilion, this chalet consists of a bedroom that leads to a spacious open-sided terrace immersed in nature.",
        features: [
          "Air Conditions",
          "Overhead Fan",
          "Free WiFi",
          "Room Service",
          "Rain Shower",
        ],
        id: "pagoda-gold",
        images: [
          {
            nextGen: "/assets/img/bg-boutique-87.avif",
            fallback: "/assets/img/bg-boutique-87.jpg",
            alt: "Casa Heliconia Front - Sri Lankan Luxury Boutique Hotel",
          },
          {
            nextGen: "/assets/img/singhagiri-fireplace.avif",
            fallback: "/assets/img/singhagiri-fireplace.jpg",
          },
        ],
        name: "Pagoda Gold",
        size: 60,
      },
    ],
    experiences: [],
    description: `Casa Heliconia comprises four beautiful and eclectic pavilions set in manicured jungle within easy reach of Bandaranaike Airport. An ideal retreat for anyone seeking peace, tranquillity, and some idiosyncratic features in very private surroundings.`,
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
        lng: 80.766449,
        lat: 6.961831,
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

const navLinks: NavLink[] = [
  { name: "Hotels", route: "/hotels" },
  { name: "Offers", route: "/offers" },
  { name: "Contact", route: "/contact" },
];

const socialLinks: SocialIcon[] = [
  { name: "Facebook", link: "https://facebook.com/madushan-sooriyarathne" },
  { name: "Instagram", link: "https://instagram.com/iammadushan" },
  { name: "LinkedIn", link: "https://linkedin.com/madushan-sooriyarathne" },
];

export { slides, hotelsSlider, hotels, offers, navLinks, socialLinks };
