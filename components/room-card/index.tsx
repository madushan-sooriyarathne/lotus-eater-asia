import ButtonPrimary from "@components/buttons/button-primary";
import HeadingSecondary from "@components/headings/heading-secondary";
import HeadingTertiary from "@components/headings/heading-tertiary";
import ImageCarousel from "@components/image-carousel";
import Paragraph from "@components/paragraph";
import {
  Card,
  CardContent,
  RoomDataWrapper,
  RoomDataItem,
  RoomDataLabel,
  RoomDataIcon,
  Features,
  ButtonWrapper,
} from "./styles";
interface Props {
  room: Room;
}

const RoomCard: React.FC<Props> = ({ room }: Props): JSX.Element => {
  return (
    <Card>
      <ImageCarousel images={room.images} />
      <CardContent>
        <HeadingSecondary alignment="left">{room.name}</HeadingSecondary>
        <HeadingTertiary>{`${room.currency} ${room.bar} Per Night`}</HeadingTertiary>
        <Paragraph>{room.description}</Paragraph>
        <RoomDataWrapper>
          <RoomDataItem>
            <RoomDataIcon>
              <use xlinkHref="/assets/svg/sprites.svg#icon-bed" />
            </RoomDataIcon>
            <RoomDataLabel>{room.beds}</RoomDataLabel>
          </RoomDataItem>
          <RoomDataItem>
            <RoomDataIcon>
              <use xlinkHref="/assets/svg/sprites.svg#icon-size" />
            </RoomDataIcon>
            <RoomDataLabel>{`${room.size} Sq. F`}</RoomDataLabel>
          </RoomDataItem>
        </RoomDataWrapper>
        <Features>
          {room.features.map(
            (feature, index) =>
              `${feature} ${index < room.features.length - 1 ? "• " : ""}`
          )}
        </Features>
        <ButtonWrapper>
          <ButtonPrimary route="/contact">Reserve Now</ButtonPrimary>
        </ButtonWrapper>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
