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

interface Props {
  offer: Offer;
}

const OfferPage: React.FC<Props> = ({ offer }: Props): JSX.Element => {
  return (
    <Container>
      <ImageCover image={offer.image} heading={offer.title} />
    </Container>
  );
};

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const offer: Offer = offers.find(
    (item) => item.id === (context.params as ParsedUrlQuery).offerId
  ) as Offer;

  return {
    props: {
      offer,
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
