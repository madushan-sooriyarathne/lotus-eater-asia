import ContentSlider from "../../content-slider";
import HeadingPrimary from "../../headings/heading-primary";
import { Section } from "./styles";

interface Props {
  hotels: SliderContent[];
}

const HotelsSection: React.FC<Props> = ({ hotels }: Props): JSX.Element => {
  return (
    <Section>
      <HeadingPrimary alignment="center">Our Hotels</HeadingPrimary>
      <ContentSlider items={hotels} />
    </Section>
  );
};

export default HotelsSection;
