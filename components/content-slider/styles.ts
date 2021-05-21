import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, minmax(min-content, 1fr));
  grid-template-areas:
    "im1 im2"
    "im1 co";
  background-color: ${(props) => props.theme.colors.primaryLight};
`;

const SliderControls = styled.div`
  position: absolute;
  width: calc(100% + 5rem);
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SliderControlButton = styled.div`
  padding: 2rem;
  border-radius: 100%;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.close};
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.spread};
  }
`;

const SliderControlButtonIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${(props) => props.theme.colors.blackLight};
`;

const PictureContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const PrimaryImage = styled(PictureContainer)`
  grid-area: im1;
`;

const SecondaryImage = styled(PictureContainer)`
  grid-area: im2;
`;

const AnimatedPicture = styled(motion.img)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  min-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(-50%) scale(1.05);
  }
`;

const ContentWrapper = styled(motion.div)`
  grid-area: co;
  padding: 3rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const sliderVariants: Variants = {
  enter: {
    // zIndex: 0,
    opacity: 0,
  },
  center: {
    // zIndex: 1,
    opacity: 1,
  },
  exit: {
    // zIndex: 0,
    opacity: 0,
  },
};

const SliderContentVariants: Variants = {
  start: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  leave: {
    y: -5,
    opacity: 0,
  },
};

export {
  Container,
  SliderControlButton,
  SliderControls,
  SliderControlButtonIcon,
  PrimaryImage,
  SecondaryImage,
  AnimatedPicture,
  ContentWrapper,
  TitleWrapper,
  sliderVariants,
  SliderContentVariants,
};
