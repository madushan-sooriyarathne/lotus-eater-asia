import HeadingPrimary from "@components/headings/heading-primary";
import HotelCard from "@components/hotel-card";
import { Section, HotelCardGroup } from "./styles";

interface Props {
  hotels: Hotel[];
}

const HotelGroup: React.FC<Props> = ({ hotels }: Props): JSX.Element => {
  return (
    <Section>
      <HeadingPrimary>Our Properties</HeadingPrimary>
      <HotelCardGroup>
        {hotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </HotelCardGroup>
    </Section>
  );
};

export default HotelGroup;
