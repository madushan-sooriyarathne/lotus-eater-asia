import HeadingPrimary from "../../headings/heading-primary";
import HeadingTertiary from "../../headings/heading-tertiary";
import Paragraph from "../../paragraph";
import { Section, Image, ContentWrapper, ParagraphWrapper } from "./styles";

const AboutSection: React.FC = (): JSX.Element => {
  return (
    <Section>
      <ContentWrapper>
        <HeadingPrimary>Lotus Eater</HeadingPrimary>
        <HeadingTertiary>Concept</HeadingTertiary>
        <ParagraphWrapper>
          <Paragraph alignment="left">
            <b>Lotus Eater</b> represents the idea of hosting, having people
            over to engage and share; and the idea of relaxing and lounging, in
            a peaceful tranquil environment. These are the true archetypal
            experiences we want to share in our homes. The dichotomy of worn
            even forgotten design elements paired with exquisite art work and
            pedigreed materials is precisely what defines Lotus Eater design
            ethos. It is about celebrating unconventional beauty and oddity and
            the specialness of certain things, to create a calm and tranquil
            environment.
          </Paragraph>
        </ParagraphWrapper>
      </ContentWrapper>
      <Image>
        <source type="image/avif" srcSet="/assets/img/bg-boutique-87.avif" />
        <img
          src="/assets/img/bg-boutique-87.jpg"
          alt="About us section image"
        />
      </Image>
    </Section>
  );
};

export default AboutSection;
