import HeadingPrimary from "@components/headings/heading-primary";
import { Section, RoomContainer } from "./styles";

interface Props {
  rooms: Room[];
}

const RoomsSection: React.FC<Props> = ({ rooms }: Props): JSX.Element => {
  return (
    <Section id="rooms">
      <HeadingPrimary>Rooms</HeadingPrimary>
      <RoomContainer>This is rooms</RoomContainer>
    </Section>
  );
};

export default RoomsSection;
