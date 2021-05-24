import HeadingSecondary from "../headings/heading-secondary";
import Paragraph from "../paragraph";
import { Card, ContentWrapper, Image } from "./styles";

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
        <HeadingSecondary>{offer.title}</HeadingSecondary>
        <Paragraph>{offer.description}</Paragraph>
      </ContentWrapper>
    </Card>
  );
};

export default OfferCard;
