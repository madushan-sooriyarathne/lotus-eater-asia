import ButtonPrimary from "../buttons/button-primary";
import HeadingSecondary from "../headings/heading-secondary";
import HeadingTertiary from "../headings/heading-tertiary";
import Paragraph from "../paragraph";
import {
  Container,
  SliderControlButton,
  SliderControlButtonIcon,
  SliderControls,
  PrimaryImage,
  SecondaryImage,
  AnimatedPicture,
  ContentWrapper,
  TitleWrapper,
} from "./styles";

const ContentSlider: React.FC = (): JSX.Element => {
  return (
    <Container>
      <SliderControls>
        <SliderControlButton>
          <SliderControlButtonIcon>
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-left" />
          </SliderControlButtonIcon>
        </SliderControlButton>
        <SliderControlButton>
          <SliderControlButtonIcon>
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-right" />
          </SliderControlButtonIcon>
        </SliderControlButton>
      </SliderControls>
      <PrimaryImage>
        <picture>
          <source type="image/avif" srcSet="/assets/img/bg-boutique-87.avif" />
          <AnimatedPicture
            src="/assets/img/bg-boutique-87.jpg"
            alt="About us section image"
          />
        </picture>
      </PrimaryImage>
      <SecondaryImage>
        <picture>
          <source
            type="image/avif"
            srcSet="/assets/img/singhagiri-brunch.avif"
          />
          <AnimatedPicture
            src="/assets/img/singhagiri-brunch.jpg"
            alt="About us section image"
          />
        </picture>
      </SecondaryImage>
      <ContentWrapper>
        <TitleWrapper>
          <HeadingSecondary>Casa Heliconia</HeadingSecondary>
          <HeadingTertiary>Pasyala</HeadingTertiary>
        </TitleWrapper>
        <Paragraph>
          Casa Heliconia comprises four beautiful and eclectic pavilions set in
          manicured jungle within easy reach of Bandaranaike Airport. An ideal
          retreat for anyone seeking peace, tranquillity, and some idiosyncratic
          features in very private surroundings.
        </Paragraph>
        <ButtonPrimary></ButtonPrimary>
      </ContentWrapper>
    </Container>
  );
};

export default ContentSlider;
