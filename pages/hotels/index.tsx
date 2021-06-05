import HotelGroup from "@components/layout/hotel-page/hotel-group";
import Container from "@layouts/common/container";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { hotels } from "@site-data";

interface Props {
  hotels: Hotel[];
}

const HotelsPage: React.FC<Props> = ({ hotels }: Props): JSX.Element => {
  return (
    <Container>
      <HotelGroup hotels={hotels} />
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
