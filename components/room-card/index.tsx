import ImageCarousel from "@components/image-carousel";
import { Card } from "./styles";
interface Props {
  room: Room;
}

const RoomCard: React.FC<Props> = ({ room }: Props): JSX.Element => {
  return (
    <Card>
      <ImageCarousel images={room.images} />
    </Card>
  );
};

export default RoomCard;
