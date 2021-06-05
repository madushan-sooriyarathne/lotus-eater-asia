import ButtonSecondary from "@components/buttons/button-secondary";
import HeadingSecondary from "@components/headings/heading-secondary";
import HeadingSub from "@components/headings/heading-sub";
import ImageComponent from "@components/image";
import TextGroup from "@components/text-group";
import { Card, ImageWrapper } from "./styles";

interface Props {
  hotel: Hotel;
}

const HotelCard: React.FC<Props> = ({ hotel }: Props): JSX.Element => {
  return (
    <Card>
      <ImageWrapper>
        <ImageComponent image={hotel.images[0]} />
      </ImageWrapper>
      <TextGroup>
        <HeadingSecondary>{hotel.name}</HeadingSecondary>
        <HeadingSub>{hotel.location.place}</HeadingSub>
      </TextGroup>
      <ButtonSecondary route={`/hotels/${hotel.id}`}>
        View Hotel
      </ButtonSecondary>
    </Card>
  );
};

export default HotelCard;
