import AboutSection from "../components/layout/home/about-section";
import Container from "../components/layout/common/container";
import HeroSlider from "../components/layout/home/hero-slider";
import HotelsMap from "../components/layout/home/hotels-map";
import HotelsSection from "../components/layout/home/hotels-section";
import NewsletterSection from "../components/layout/common/newsletter-section";
import OffersSection from "../components/layout/home/offers-section";
import { slides, hotelsSlider, hotels, offers } from "../site-data";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HeroSlider slides={slides} />
      <AboutSection />
      <HotelsSection hotels={hotelsSlider} />
      <HotelsMap hotels={hotels} />
      <OffersSection offers={offers} />
      <NewsletterSection />
    </Container>
  );
};

export default Home;
