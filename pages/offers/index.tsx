import { GetStaticProps, GetStaticPropsResult } from "next";
import { offers } from "@site-data";
import Container from "@components/layout/common/container";
import ImageCover from "@components/layout/common/image-cover";
import ItemGrid from "@components/layout/common/item-grid";
import OfferCard from "@components/offer-card";
import NewsletterSection from "@components/layout/common/newsletter-section";

interface Props {
  offers: Offer[];
}

const OfferPage: React.FC<Props> = ({ offers }: Props): JSX.Element => {
  return (
    <Container>
      <ImageCover image={offers[0].image} heading="Offers & Deals" />
      <ItemGrid>
        {offers.map((offer) => (
          <OfferCard offer={offer} key={offer.id} />
        ))}
      </ItemGrid>
      <NewsletterSection />
    </Container>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      offers: offers,
    },
  };
};

export { getStaticProps };
export default OfferPage;
