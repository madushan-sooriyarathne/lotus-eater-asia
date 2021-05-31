import ButtonSecondary from "../buttons/button-secondary";
import HeadingTertiary from "../headings/heading-tertiary";
import ImageComponent from "../image";
import Paragraph from "../paragraph";
import {
  Card,
  ContentWrapper,
  TitleWrapper,
  PriceGroup,
  ButtonWrapper,
  DiscountLabel,
  Price,
  ImageWrapper,
} from "./styles";

interface Props {
  offer: Offer;
}

const OfferCard: React.FC<Props> = ({ offer }: Props): JSX.Element => {
  return (
    <Card>
      <ImageWrapper>
        <ImageComponent image={offer.image} />
      </ImageWrapper>
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
