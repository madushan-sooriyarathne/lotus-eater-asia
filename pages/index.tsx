import AboutSection from "../components/layout/about-section";
import Container from "../components/layout/container";
import HeroSlider from "../components/layout/hero-slider";
import HotelsSection from "../components/layout/hotels-section";
import { slides, hotelsSlider } from "../site-data";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HeroSlider slides={slides} />
      <AboutSection />
      <HotelsSection hotels={hotelsSlider} />
    </Container>
  );
};

export default Home;
