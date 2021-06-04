import MapSection from "@components/layout/hotel/map-section";
import Container from "@layouts/common/container";
import HotelCover from "@layouts/hotel/hotel-cover";
import HotelOverviewSection from "@layouts/hotel/overview-section";
import RoomsSection from "@layouts/hotel/rooms-section";

import { hotels } from "@site-data";

const Hotel: React.FC = (): JSX.Element => {
  const hotel = hotels[0];

  return (
    <Container>
      <HotelCover coverImage={hotel.images[0]} name={hotel.name} />
      <HotelOverviewSection hotel={hotel} />
      <RoomsSection rooms={hotel.rooms} />
      <MapSection hotel={hotel} />
    </Container>
  );
};

export default Hotel;
