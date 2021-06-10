import HeadingSecondary from "@components/headings/heading-secondary";
import HeadingTertiary from "@components/headings/heading-tertiary";
import Paragraph from "@components/paragraph";
import TextGroup from "@components/text-group";

import { months } from "@site-data";

import {
  BookingInstructions,
  Section,
  SummeryGroup,
  PriceGroup,
  Validity,
  Inclusions,
  Terms,
  BulletList,
  ListItem,
} from "./styles";

interface Props {
  offer: Offer;
}

const OfferDetailsSection: React.FC<Props> = ({
  offer,
}: Props): JSX.Element => {
  const parsedDate: Date = new Date(offer.validTill);

  return (
    <Section>
      <SummeryGroup>
        <TextGroup>
          <HeadingSecondary>{offer.title}</HeadingSecondary>
          <Paragraph alignment="left">{offer.description}</Paragraph>
          <Validity>{`Valid till ${parsedDate.getDate()} ${
            months[parsedDate.getMonth()]
          } ${parsedDate.getFullYear()} `}</Validity>
        </TextGroup>
        <PriceGroup>
          {offer.price && <p>{`${offer.currency} ${offer.price}`}</p>}
          {offer.discount && <span>{`${offer.discount}% Off`}</span>}
        </PriceGroup>
        <BookingInstructions>
          <HeadingTertiary>How to Book</HeadingTertiary>
          <Paragraph alignment="left">
            {`Call +94 77 777 2616 and mention the offer name "${offer.title}" to our reservations executive. Or, Drop an email mentioning the offer name in the email to reservations@lotuseaterasia.com`}
          </Paragraph>
        </BookingInstructions>
      </SummeryGroup>

      <Inclusions>
        <HeadingTertiary>Inclusions</HeadingTertiary>
        <BulletList>
          {offer.includes.map((item, index) => (
            <ListItem key={`include-${index}`}>{item}</ListItem>
          ))}
        </BulletList>
      </Inclusions>
      <Terms>
        <HeadingTertiary>Terms & Conditions</HeadingTertiary>
        <BulletList>
          {offer.terms.map((item, index) => (
            <ListItem key={`terms-${index}`}>{item}</ListItem>
          ))}
        </BulletList>
      </Terms>
    </Section>
  );
};

export default OfferDetailsSection;
