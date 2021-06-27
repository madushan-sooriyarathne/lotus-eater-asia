import Link from "next/link";
import HeadingSecondary from "@components/headings/heading-secondary";
import { Section, HotelLinkGroup, HotelLink } from "./styles";

interface Props {
  hotels: Hotel[];
}

const GalleryNav: React.FC<Props> = ({ hotels }: Props): JSX.Element => {
  return (
    <Section>
      <HeadingSecondary alignment="left">Browse via hotels</HeadingSecondary>
      <HotelLinkGroup>
        {hotels.map((hotel) => (
          <Link href={`/gallery/${hotel.id}`} key={hotel.id}>
            <HotelLink>{`${hotel.name}'s Gallery`}</HotelLink>
          </Link>
        ))}
      </HotelLinkGroup>
    </Section>
  );
};

export default GalleryNav;
