import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Carousel = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
`;

const CarouselCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: red;
`;

const CarouselControls = styled.div`
  width: auto;
  height: auto;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(2, min-content);

  & > *:first-child {
    border-right: ${(props) => `1px solid ${props.theme.colors.blackLight}`};
  }
`;

const CarouselControlButton = styled.div`
  width: auto;
  height: auto;
  padding: 2rem;

  display: grid;
  place-items: center;

  background-color: ${(props) => props.theme.colors.white};

  cursor: pointer;

  &:hover {
    & #arrow-left {
      transform: translateX(-5px);
    }

    & #arrow-right {
      transform: translateX(5px);
    }
  }
`;

const CarouselControlButtonIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: ${(props) => props.theme.colors.blackLight};

  transition: transform 0.2s ease-in-out;
`;

// Motion variants
const carouselCardMotionVariant: Variants = {
  start: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? "-100%" : "100%",
  }),
  enter: {
    opacity: 1,
    zIndex: 1,
    x: "0%",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    zIndex: 0,
    x: direction > 0 ? "-100%" : "100%",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 1 },
    },
  }),
};

export {
  Carousel,
  CarouselCard,
  CarouselControls,
  CarouselControlButton,
  CarouselControlButtonIcon,
  carouselCardMotionVariant,
};
