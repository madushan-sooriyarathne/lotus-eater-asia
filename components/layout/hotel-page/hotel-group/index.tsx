import HotelCard from "@components/hotel-card";
import { HotelCardGroup } from "./styles";

interface Props {
  hotels: Hotel[];
}

const HotelGroup: React.FC<Props> = ({ hotels }: Props): JSX.Element => {
  return (
    <HotelCardGroup>
      {hotels.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </HotelCardGroup>
  );
};

export default HotelGroup;
