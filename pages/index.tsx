import AboutSection from "../components/layout/about-section";
import Container from "../components/layout/container";
import HeroSlider from "../components/layout/hero-slider";
import { slides } from "../site-data";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HeroSlider slides={slides} />
      <AboutSection />
    </Container>
  );
};

export default Home;
