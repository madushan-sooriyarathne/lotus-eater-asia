import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const SliderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;
  background-color: black;
`;

const SlideControls = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10rem;
  z-index: 10;
`;

const SliderButton = styled.svg`
  fill: white;
  width: 8rem;
  height: 8rem;
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
  overflow: hidden;

  z-index: -1;
`;

const SlideImage = styled.picture`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;

  & img {
    min-width: 100%;
    min-height: 100%;
  }
`;

const sliderAnimation: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

export {
  SlideControls,
  SliderButton,
  SliderWrapper,
  Slide,
  SlideImage,
  sliderAnimation,
};
