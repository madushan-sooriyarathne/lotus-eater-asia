import ItemGrid from "@components/layout/common/item-grid";
import Container from "@layouts/common/container";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { hotels } from "@site-data";
import ImageCover from "@components/layout/common/image-cover";
import NewsletterSection from "@components/layout/common/newsletter-section";
import HotelCard from "@components/hotel-card";

interface Props {
  hotels: Hotel[];
}

const HotelsPage: React.FC<Props> = ({ hotels }: Props): JSX.Element => {
  return (
    <Container title="Our Hotels">
      <ImageCover image={hotels[0].images[0]} heading="Our Properties" />
      <ItemGrid>
        {hotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </ItemGrid>
      <NewsletterSection />
    </Container>
  );
};

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      hotels: hotels,
    },
  };
};

export { getStaticProps };
export default HotelsPage;
