import ButtonSecondary from "../buttons/button-secondary";
import HeadingTertiary from "../headings/heading-tertiary";
import Paragraph from "../paragraph";
import {
  Card,
  ContentWrapper,
  Image,
  TitleWrapper,
  PriceGroup,
  ButtonWrapper,
  DiscountLabel,
  Price,
} from "./styles";

interface Props {
  offer: Offer;
}

const OfferCard: React.FC<Props> = ({ offer }: Props): JSX.Element => {
  return (
    <Card>
      <picture>
        <source srcSet={offer.image.nextGen} type="image/avif" />
        <Image src={offer.image.fallback} alt={offer.image.alt} />
      </picture>
      <ContentWrapper>
        <TitleWrapper>
          <HeadingTertiary>{offer.title}</HeadingTertiary>
          <PriceGroup>
            {offer.price && <Price>{`${offer.currency} ${offer.price}`}</Price>}
            {offer.discount && (
              <DiscountLabel>{`${offer.discount}% Off`}</DiscountLabel>
            )}
          </PriceGroup>
        </TitleWrapper>
        <Paragraph alignment="left">{offer.description}</Paragraph>
        <ButtonWrapper>
          <ButtonSecondary route={`/offers/${offer.id}`}>
            Learn More
          </ButtonSecondary>
        </ButtonWrapper>
      </ContentWrapper>
    </Card>
  );
};

export default OfferCard;
