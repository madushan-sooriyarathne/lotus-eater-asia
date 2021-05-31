import Container from "../../components/layout/container";
import HotelCover from "../../components/layout/hotel-cover";

import { hotels } from "../../site-data";

const Hotel: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HotelCover coverImage={hotels[0].images[0]} name={hotels[0].name} />
    </Container>
  );
};

export default Hotel;
