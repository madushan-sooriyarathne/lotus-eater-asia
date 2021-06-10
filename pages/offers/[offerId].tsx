import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { offers } from "@site-data";
import { ParsedUrlQuery } from "querystring";
import Container from "@components/layout/common/container";
import ImageCover from "@components/layout/common/image-cover";
import OfferDetailsSection from "@components/layout/offer/offer-details";
import OtherOffers from "@components/layout/offer/other-offers";

interface Props {
  primaryOffer: Offer;
  otherOffers: Offer[];
}

const OfferPage: React.FC<Props> = ({
  primaryOffer,
  otherOffers,
}: Props): JSX.Element => {
  return (
    <Container>
      <ImageCover image={primaryOffer.image} heading={primaryOffer.title} />
      <OfferDetailsSection offer={primaryOffer} />
      {otherOffers.length > 0 && <OtherOffers offers={otherOffers} />}
    </Container>
  );
};

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const primaryOffer: Offer = offers.find(
    (item) => item.id === (context.params as ParsedUrlQuery).offerId
  ) as Offer;
  const otherOffers: Offer[] = offers.filter(
    (item) => item.id !== (context.params as ParsedUrlQuery).offerId
  );

  return {
    props: {
      primaryOffer,
      otherOffers,
    },
  };
};

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const paths = offers.map((item) => ({ params: { offerId: item.id } }));

    return {
      paths,
      fallback: false,
    };
  };

export { getStaticProps, getStaticPaths };
export default OfferPage;
