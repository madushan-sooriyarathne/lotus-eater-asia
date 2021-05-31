import Container from "../../components/layout/common/container";
import HotelCover from "../../components/layout/hotel/hotel-cover";
import HotelOverviewSection from "../../components/layout/hotel/overview-section";

import { hotels } from "../../site-data";

const Hotel: React.FC = (): JSX.Element => {
  const hotel = hotels[0];

  return (
    <Container>
      <HotelCover coverImage={hotel.images[0]} name={hotel.name} />
      <HotelOverviewSection hotel={hotel} />
    </Container>
  );
};

export default Hotel;
