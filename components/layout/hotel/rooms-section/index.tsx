import HeadingPrimary from "@components/headings/heading-primary";
import RoomCard from "@components/room-card";
import { Section, RoomContainer } from "./styles";

interface Props {
  rooms: Room[];
}

const RoomsSection: React.FC<Props> = ({ rooms }: Props): JSX.Element => {
  return (
    <Section id="rooms">
      <HeadingPrimary>Rooms</HeadingPrimary>
      <RoomContainer>
        {rooms.map((room) => (
          <RoomCard room={room} key={room.id} />
        ))}
      </RoomContainer>
    </Section>
  );
};

export default RoomsSection;
