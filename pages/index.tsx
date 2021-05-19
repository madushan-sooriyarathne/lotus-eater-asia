import Container from "../components/layout/container";
import HeroSlider from "../components/layout/hero-slider";
import { slides } from "../site-data";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HeroSlider slides={slides} />
    </Container>
  );
};

export default Home;
