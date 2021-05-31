import ButtonPrimary from "../../buttons/button-primary";
import HeadingPrimary from "../../headings/heading-primary";
import OfferCard from "../../offer-card";
import { Section, OfferContainer } from "./styles";

interface Props {
  offers: Offer[];
}

const OffersSection: React.FC<Props> = ({ offers }: Props): JSX.Element => {
  return (
    <Section>
      <HeadingPrimary>Offers</HeadingPrimary>
      <OfferContainer>
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer}></OfferCard>
        ))}
      </OfferContainer>
      <ButtonPrimary route="/offers">Check All Offers</ButtonPrimary>
    </Section>
  );
};

export default OffersSection;
