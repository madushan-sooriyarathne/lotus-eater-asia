import Container from "../components/layout/container";
import ImageSlider from "../components/image-slider";
import { slides } from "../site-data";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <ImageSlider slides={slides} />
    </Container>
  );
};

export default Home;
