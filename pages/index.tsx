import AboutSection from "../components/layout/about-section";
import Container from "../components/layout/container";
import HeroSlider from "../components/layout/hero-slider";
import HotelsMap from "../components/layout/hotels-map";
import HotelsSection from "../components/layout/hotels-section";
import { slides, hotelsSlider, hotels } from "../site-data";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HeroSlider slides={slides} />
      <AboutSection />
      <HotelsSection hotels={hotelsSlider} />
      <HotelsMap hotels={hotels} />
    </Container>
  );
};

export default Home;
