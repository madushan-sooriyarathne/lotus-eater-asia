import styled, { css, keyframes } from "styled-components";
import { motion, Variants } from "framer-motion";

const animate = keyframes`
from  {
  stroke-dashoffset: 130;
}
to {
  stroke-dashoffset: 0;
}
`;

const SliderWrapper = styled.div`
  grid-column: full-start / full-end;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;
  background-color: black;
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
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

  & img {
    min-width: 100%;
    min-height: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 5rem 15rem;

  background-image: ${(props) => props.theme.gradients.heroOverlay};
  z-index: 9;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "lo"
    "co"
    "sl";
  gap: 3rem;
  align-items: center;
  justify-items: center;
`;

const Logo = styled.img`
  grid-area: lo;
  width: auto;
  height: 10rem;
  cursor: pointer;
`;

const OverlayContent = styled.div`
  grid-area: co;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: 6rem;
  }
`;

const OverlayTextHeading = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: 8rem;
  letter-spacing: 5px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  background: ${(props) => props.theme.gradients.headingClip};

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubText = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  width: 60%;

  & > b {
    font-weight: 700;
  }
`;

const SliderAnchorSet = styled.div`
  grid-area: sl;
  justify-self: start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5rem;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const SliderAnchorItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
`;

interface SliderAnchorIconProps {
  active: boolean;
}

const SliderAnchorIcon = styled.svg<SliderAnchorIconProps>`
  width: 1.8rem;
  height: 1.8rem;
  fill: ${(props) =>
    props.active
      ? props.theme.colors.white
      : props.theme.colors.whiteTransparent};
`;

const SliderAnchorBorderWrapper = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const SliderAnchorBorder = styled(motion.circle)<SliderAnchorIconProps>`
  stroke: ${(props) => (props.active ? "red" : "transparent")};
  stroke-width: 1.5px;
  fill: transparent;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  animation: ${(props) =>
    props.active &&
    css`
      ${animate} 6s cubic-bezier(0,0,1,1)
    `};
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
  SliderWrapper,
  Slide,
  SlideImage,
  sliderAnimation,
  Overlay,
  Logo,
  OverlayContent,
  OverlayTextHeading,
  SubText,
  SliderAnchorSet,
  SliderAnchorItem,
  SliderAnchorBorderWrapper,
  SliderAnchorIcon,
  SliderAnchorBorder,
};
