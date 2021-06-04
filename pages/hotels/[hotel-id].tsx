import OffersSection from "@components/layout/common/offers-section";
import MapSection from "@components/layout/hotel/map-section";
import Container from "@layouts/common/container";
import HotelCover from "@layouts/hotel/hotel-cover";
import HotelOverviewSection from "@layouts/hotel/overview-section";
import RoomsSection from "@layouts/hotel/rooms-section";

import { hotels, offers } from "@site-data";

const Hotel: React.FC = (): JSX.Element => {
  const hotel = hotels[0];

  return (
    <Container>
      <HotelCover hotel={hotel} />
      <HotelOverviewSection hotel={hotel} />
      <RoomsSection rooms={hotel.rooms} />
      <MapSection hotel={hotel} />
      {hotel.offers && hotel.offers.length < 1 && (
        <OffersSection offers={offers} />
      )}
    </Container>
  );
};

export default Hotel;
