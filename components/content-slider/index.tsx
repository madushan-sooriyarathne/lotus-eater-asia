import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  sliderVariants,
  SliderContentVariants,
} from "./styles";
import { clamp } from "../../utils";

interface Props {
  items: SliderContent[];
}

const ContentSlider: React.FC<Props> = ({ items }: Props): JSX.Element => {
  const [page, setPage] = useState<number>(0);

  const paginate = (direction: -1 | 1): void => {
    setPage(clamp(page + direction, 0, items.length - 1));
  };

  return (
    <Container>
      <SliderControls>
        <SliderControlButton onClick={() => paginate(1)}>
          <SliderControlButtonIcon>
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-left" />
          </SliderControlButtonIcon>
        </SliderControlButton>
        <SliderControlButton onClick={() => paginate(-1)}>
          <SliderControlButtonIcon>
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-right" />
          </SliderControlButtonIcon>
        </SliderControlButton>
      </SliderControls>
      <AnimatePresence initial={true}>
        <PrimaryImage>
          <picture>
            <source
              type="image/avif"
              srcSet={items[page].primaryImage.nextGen}
            />
            <AnimatedPicture
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              key={page}
              transition={{ duration: 0.5 }}
              src={items[page].primaryImage.fallback}
              alt={items[page].primaryImage.alt}
            />
          </picture>
        </PrimaryImage>
        {/* </AnimatePresence>
      <AnimatePresence initial={true}> */}
        <SecondaryImage>
          <picture>
            <source
              type="image/avif"
              srcSet={items[page].secondaryImage.nextGen}
            />
            <AnimatedPicture
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              key={page}
              transition={{ duration: 0.5 }}
              src={items[page].secondaryImage.fallback}
              alt={items[page].secondaryImage.alt}
            />
          </picture>
        </SecondaryImage>

        <ContentWrapper
          variants={SliderContentVariants}
          key={page}
          initial="start"
          animate="enter"
          exit="leave"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <TitleWrapper>
            <HeadingSecondary>{items[page].content.title}</HeadingSecondary>
            <HeadingTertiary>{items[page].content.subtitle}</HeadingTertiary>
          </TitleWrapper>
          <Paragraph>{items[page].content.description}</Paragraph>
          <ButtonPrimary></ButtonPrimary>
        </ContentWrapper>
      </AnimatePresence>
    </Container>
  );
};

export default ContentSlider;
