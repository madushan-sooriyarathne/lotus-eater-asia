import { useState } from "react";
import { clamp } from "@utils";
import { AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselCard,
  CarouselControls,
  CarouselControlButton,
  CarouselControlButtonIcon,
  carouselCardMotionVariant,
} from "./styles";
import ImageComponent from "@components/image";

interface Props {
  images: Image[];
}

const ImageCarousel: React.FC<Props> = ({ images }: Props): JSX.Element => {
  const [[slide, direction], setData] = useState<[number, number]>([0, 1]);

  const paginate = (direction: number): void => {
    setData([slide + direction, direction]);
  };

  const curPage: number = clamp(slide, 0, images.length);

  return (
    <Carousel>
      <AnimatePresence custom={direction} initial={false}>
        <CarouselCard
          variants={carouselCardMotionVariant}
          initial="start"
          animate="enter"
          exit="exit"
          custom={direction}
          key={curPage}
        >
          <ImageComponent image={images[curPage]} />
        </CarouselCard>
      </AnimatePresence>
      <CarouselControls>
        <CarouselControlButton onClick={() => paginate(-1)}>
          <CarouselControlButtonIcon id="arrow-left">
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-left" />
          </CarouselControlButtonIcon>
        </CarouselControlButton>
        <CarouselControlButton onClick={() => paginate(1)}>
          <CarouselControlButtonIcon id="arrow-right">
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-right" />
          </CarouselControlButtonIcon>
        </CarouselControlButton>
      </CarouselControls>
    </Carousel>
  );
};

export default ImageCarousel;
