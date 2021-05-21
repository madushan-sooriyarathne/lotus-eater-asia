import ContentSlider from "../../content-slider";
import HeadingPrimary from "../../headings/heading-primary";
import { Section } from "./styles";

const HotelsSection: React.FC = (): JSX.Element => {
  return (
    <Section>
      <HeadingPrimary alignment="center">Our Hotels</HeadingPrimary>
      <ContentSlider />
    </Section>
  );
};

export default HotelsSection;
