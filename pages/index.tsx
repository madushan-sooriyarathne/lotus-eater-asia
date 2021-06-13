import AboutSection from "@layouts/home/about-section";
import Container from "@layouts/common/container";
import HeroSlider from "@layouts/home/hero-slider";
import HotelsMap from "@layouts/home/hotels-map";
import HotelsSection from "@layouts/home/hotels-section";
import NewsletterSection from "@layouts/common/newsletter-section";
import OffersSection from "@components/layout/common/offers-section";
import { slides, hotelsSlider, hotels, offers } from "@site-data";
import GallerySection from "@components/layout/common/gallery-section";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container title="Home">
      <HeroSlider slides={slides} />
      <AboutSection />
      <HotelsSection hotels={hotelsSlider} />
      <HotelsMap hotels={hotels} />
      <OffersSection offers={offers} />
      <GallerySection images={[...slides, ...slides, ...slides, ...slides]} />
      <NewsletterSection />
    </Container>
  );
};

export default Home;
