import AboutSection from "@layouts/home/about-section";
import Container from "@layouts/common/container";
import HeroSlider from "@layouts/home/hero-slider";
import HotelsMap from "@layouts/home/hotels-map";
import HotelsSection from "@layouts/home/hotels-section";
import NewsletterSection from "@layouts/common/newsletter-section";
import OffersSection from "@layouts/home/offers-section";
import { slides, hotelsSlider, hotels, offers } from "./../site-data";

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
