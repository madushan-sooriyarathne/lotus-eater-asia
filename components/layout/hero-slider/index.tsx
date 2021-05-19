import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Overlay,
  Logo,
  OverlayContent,
  OverlayTextHeading,
  Slide,
  SlideImage,
  SliderAnchorBorder,
  SliderAnchorBorderWrapper,
  SliderAnchorIcon,
  SliderAnchorItem,
  SliderAnchorSet,
  sliderAnimation,
  SliderWrapper,
  SubText,
} from "./styles";

interface Props {
  slides: Slides[];
}

const HeroSlider: React.FC<Props> = ({ slides }: Props): JSX.Element => {
  const [[page, direction], setSelected] = useState<[number, number]>([0, 1]);

  let timeout: NodeJS.Timeout;
  useEffect(() => {
    timeout = setTimeout(() => paginate(1), 6000);
  });

  const clamp = (num: number, min: number, max: number) => {
    const rangeSize = max - min;
    return ((((num - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const paginate = (newDirection: number = 1) => {
    setSelected([page + newDirection, newDirection]);
  };

  const handleClick = (slideNo: number) => {
    setSelected([slideNo, 1]);
  };

  const sliderIndex = clamp(page, 0, slides.length);

  return (
    <SliderWrapper>
      <AnimatePresence custom={direction} initial={false}>
        <Overlay>
          <Logo
            src="/assets/logos/lotus-eater-asia-logo-white.svg"
            alt="Luxury Boutique Hotels across Sri Lanka"
          ></Logo>
          <OverlayContent>
            <OverlayTextHeading>
              Privacy, Luxury <br />& Impeccable Service
            </OverlayTextHeading>
            <SubText>
              Only two suites, per property for you to indulge in the
              graciousness of old Ceylon.
            </SubText>
          </OverlayContent>

          <SliderAnchorSet>
            {slides.map((slide, index) => (
              <SliderAnchorItem
                onClick={() => {
                  clearTimeout(timeout);
                  handleClick(index);
                }}
              >
                <SliderAnchorBorderWrapper>
                  <SliderAnchorBorder
                    r="2rem"
                    cx="50%"
                    cy="50%"
                    active={index === sliderIndex}
                  />
                </SliderAnchorBorderWrapper>
                <SliderAnchorIcon active={index === sliderIndex}>
                  <use xlinkHref="/assets/svg/sprites.svg#icon-diamond"></use>
                </SliderAnchorIcon>
              </SliderAnchorItem>
            ))}
          </SliderAnchorSet>
        </Overlay>
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
            <source
              type="image/avif"
              srcSet={slides[sliderIndex].img.nextGen}
            />
            <img
              src={slides[sliderIndex].img.fallback}
              alt={slides[sliderIndex].content?.heading}
            />
          </SlideImage>
        </Slide>
      </AnimatePresence>
    </SliderWrapper>
  );
};

export default HeroSlider;
