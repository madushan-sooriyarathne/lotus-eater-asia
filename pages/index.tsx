import AboutSection from "../components/layout/about-section";
import Container from "../components/layout/container";
import Footer from "../components/layout/footer";
import HeroSlider from "../components/layout/hero-slider";
import HotelsSection from "../components/layout/hotels-section";
import { slides } from "../site-data";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HeroSlider slides={slides} />
      <AboutSection />
      <HotelsSection />
    </Container>
  );
};

export default Home;
