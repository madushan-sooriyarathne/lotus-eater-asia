import HeadingPrimary from "@components/headings/heading-primary";
import HeadingSub from "@components/headings/heading-sub";
import ImageComponent from "@components/image";
import Paragraph from "@components/paragraph";
import {
  Section,
  ImageWrapper,
  ContentWrapper,
  ParagraphWrapper,
} from "./styles";

const AboutSection: React.FC = (): JSX.Element => {
  return (
    <Section>
      <ContentWrapper>
        <HeadingPrimary>Lotus Eater</HeadingPrimary>
        <HeadingSub>Concept</HeadingSub>
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
      <ImageWrapper>
        <ImageComponent
          image={{
            blurUrl: "LGEKV|}=v$:+xaNdE3MzIp$jOX5m",
            src: "/assets/img/singhagiri-room.jpg",
            alt: "Stay 3 Nights for price of 2 Nights offer cover image",
          }}
        />
      </ImageWrapper>
    </Section>
  );
};

export default AboutSection;
