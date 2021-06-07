import OffersSection from "@components/layout/common/offers-section";
import MapSection from "@components/layout/hotel/map-section";
import Container from "@layouts/common/container";
import HotelCover from "@layouts/hotel/hotel-cover";
import HotelOverviewSection from "@layouts/hotel/overview-section";
import RoomsSection from "@layouts/hotel/rooms-section";

import { hotels, offers } from "@site-data";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  hotel: Hotel;
}

const Hotel: React.FC<Props> = ({ hotel }: Props): JSX.Element => {
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

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const hotel: Hotel = hotels.find(
    (item) => item.id === (context.params as ParsedUrlQuery).hotelId
  ) as Hotel;

  return {
    props: {
      hotel,
    },
  };
};

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const paths = hotels.map((item) => ({ params: { hotelId: item.id } }));

    return {
      paths,
      fallback: false,
    };
  };

export { getStaticProps, getStaticPaths };
export default Hotel;
