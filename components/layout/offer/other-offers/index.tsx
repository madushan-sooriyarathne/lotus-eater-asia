import HeadingPrimary from "@components/headings/heading-primary";
import OfferCard from "@components/offer-card";
import { Section, OfferCardsGroup } from "./styles";

interface Props {
  offers: Offer[];
}

const OtherOffers: React.FC<Props> = ({ offers }: Props): JSX.Element => {
  return (
    <Section>
      <HeadingPrimary>Other Offers</HeadingPrimary>
      <OfferCardsGroup>
        {offers.map((offer) => (
          <OfferCard offer={offer} />
        ))}
      </OfferCardsGroup>
    </Section>
  );
};

export default OtherOffers;
