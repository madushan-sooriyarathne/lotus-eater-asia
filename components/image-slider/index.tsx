import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Slide,
  SlideControls,
  SlideImage,
  sliderAnimation,
  SliderButton,
  SliderWrapper,
} from "./styles";

interface Props {
  slides: Slides[];
}

const ImageSlider: React.FC<Props> = ({ slides }: Props): JSX.Element => {
  const [[page, direction], setSelected] = useState<[number, number]>([0, 1]);

  const clamp = (num: number, min: number, max: number) => {
    const rangeSize = max - min;
    return ((((num - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const paginate = (newDirection: number = 1) => {
    setSelected([page + newDirection, newDirection]);
  };

  const sliderIndex = clamp(page, 0, slides.length);

  return (
    <SliderWrapper>
      <AnimatePresence custom={direction} initial={false}>
        <SlideControls>
          <SliderButton onClick={() => paginate(-1)}>
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-left" />
          </SliderButton>
          <SliderButton onClick={() => paginate(1)}>
            <use xlinkHref="/assets/svg/sprites.svg#icon-arrow-right" />
          </SliderButton>
        </SlideControls>
        <Slide
          key={sliderIndex}
          custom={direction}
          variants={sliderAnimation}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <SlideImage>
            <source srcSet={slides[sliderIndex].img.nextGen} />
            <img src={slides[sliderIndex].img.fallback} />
          </SlideImage>
        </Slide>
      </AnimatePresence>
    </SliderWrapper>
  );
};

export default ImageSlider;
