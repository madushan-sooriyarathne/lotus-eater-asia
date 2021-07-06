import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ButtonPrimary from "@components/buttons/button-primary";
import HeadingSecondary from "@components/headings/heading-secondary";
import HeadingSub from "@components/headings/heading-sub";
import Paragraph from "@components/paragraph";
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
import { clamp } from "@utils";
import ImageComponent from "@components/image";

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
          <AnimatedPicture
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={page}
            transition={{ duration: 0.5 }}
          >
            <ImageComponent image={items[page].primaryImage} />
          </AnimatedPicture>
        </PrimaryImage>
      </AnimatePresence>
      <AnimatePresence initial={true}>
        <SecondaryImage>
          <AnimatedPicture
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={page}
            transition={{ duration: 0.5 }}
          >
            <ImageComponent image={items[page].secondaryImage} />
          </AnimatedPicture>
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
            <HeadingSub>{items[page].content.subtitle}</HeadingSub>
          </TitleWrapper>
          <Paragraph>{items[page].content.description}</Paragraph>
          <ButtonPrimary route={items[page].content.route}>
            View Hotel
          </ButtonPrimary>
        </ContentWrapper>
      </AnimatePresence>
    </Container>
  );
};

export default ContentSlider;
