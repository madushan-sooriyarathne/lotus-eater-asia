import { motion, Variants } from "framer-motion";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  justify-items: center;
  box-shadow: ${(props) => props.theme.shadows.spread};

  position: fixed;
  top: 5rem;
  right: 8rem;
  width: auto;
  height: auto;
  z-index: 20;
`;

const background = css`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

interface HamburgerMenuProps {
  open: boolean;
}

const HamburgerMenu = styled.div<HamburgerMenuProps>`
  width: auto;
  height: 100%;
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  background-color: transparent;
  cursor: pointer;
  border: ${(props) => `0.5px solid ${props.theme.colors.whiteTransparent}`};

  &::before {
    ${background}
    background-color: ${(props) => props.theme.colors.primary};
    z-index: -1;
    transition: transform 0.3s ease-in-out 0.4s;
    transform: ${(props) => (props.open ? "scaleY(0)" : "scale(1)")};
    transform-origin: ${(props) =>
      props.open ? "center bottom" : "center top"};
  }
`;

const HamburgerIcon = styled.svg`
  & #close-btn {
    & > line {
      stroke: ${(props) => props.theme.colors.white};
      stroke-width: 2px;
    }
  }

  & > #open-btn > line {
    stroke: ${(props) => props.theme.colors.white};
    stroke-width: 2px;
  }
`;

interface NavLinkWrapperProps {
  open: boolean;
}

const NavLinkWrapper = styled.div<NavLinkWrapperProps>`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem;
  background-color: transparent;

  position: relative;

  &::before {
    ${background};
    z-index: -1;
    background-color: ${(props) => props.theme.colors.white};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.open ? "scaleY(0)" : "scale(1)")};
    transform-origin: ${(props) =>
      props.open ? "center bottom" : "center top"};
  }

  & a {
    color: ${(props) =>
      props.open ? props.theme.colors.white : props.theme.colors.blackLight};

    &:hover {
      color: ${(props) =>
        props.open
          ? props.theme.colors.primaryLight
          : props.theme.colors.primary};
    }
  }

  & svg {
    fill: ${(props) =>
      props.open ? props.theme.colors.white : props.theme.colors.blackLight};

    &:hover {
      fill: ${(props) =>
        props.open
          ? props.theme.colors.primaryLight
          : props.theme.colors.primary};
    }
  }

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const NavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  transition: color 0.2s ease-in;

  cursor: pointer;
`;

const SocialIcon = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  transition: fill 0.2s ease-in;
  cursor: pointer;
`;

const NavOverlayMask = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 15;

  padding: 10rem;

  display: grid;
  grid-template-columns: 1fr minmax(50%, 1fr) 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "st lo en"
    "st na en"
    "st co en";
  row-gap: 5rem;
  align-items: center;
  justify-items: center;
  background: #3a3636;
`;

const OverlayBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const OverlayBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const OverlayBackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-image: linear-gradient(
    126deg,
    rgba(50, 46, 43, 1) 0%,
    rgba(79, 69, 63, 0.9) 100%
  );
`;

const OverlayLogo = styled(motion.img)`
  grid-area: lo;
  height: 10rem;
  width: auto;
`;

const NavLinkContainer = styled.div`
  grid-area: na;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 5rem;
  }
`;

const NavLinkMain = styled(motion.a)`
  font-size: 7rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.secondary};
  letter-spacing: 2px;
  line-height: 1;
  color: ${(props) => props.theme.colors.white};
`;

// Motion Variants
const OpenButtonLineVariants: Variants = {
  start: { x: "-35px" },
  enter: { x: "0px" },
  exit: { x: "-35px" },
};

const closeButtonLineOneVariant: Variants = {
  start: { x: "31px", y: "-31px" },
  enter: { x: "0", y: "0" },
  exit: { x: "31px", y: "-31px" },
};

const closeButtonLineTwoVariant: Variants = {
  start: { x: "-31px", y: "-31px" },
  enter: { x: "0", y: "0" },
  exit: { x: "-31px", y: "-31px" },
};

const OverlayMaskVariant: Variants = {
  start: {
    scaleY: 0,
    transformOrigin: "center top",
  },
  enter: {
    scaleY: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.1,
      staggerChildren: 0.1,
      when: "beforeChildren",
      // delayChildren: 0.2,
    },
  },
  exit: {
    transformOrigin: "center bottom",
    scaleY: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
};

const OverlayChildrenVariant: Variants = {
  start: {
    opacity: 0,
    y: "10px",
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: "-5px",
  },
};

const backgroundVariant: Variants = {
  start: {
    opacity: 0,
    scale: 1,
  },
  enter: {
    opacity: 1,
    scale: 1.1,
    transition: { delay: 0.3, duration: 2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

export {
  Nav,
  NavOverlayMask,
  OverlayBackground,
  OverlayBackgroundImage,
  OverlayBackgroundLayer,
  OverlayLogo,
  NavLinkContainer,
  NavLinkMain,
  NavLinkWrapper,
  NavLink,
  SocialIcon,
  HamburgerMenu,
  HamburgerIcon,
  closeButtonLineOneVariant,
  closeButtonLineTwoVariant,
  OpenButtonLineVariants,
  OverlayMaskVariant,
  OverlayChildrenVariant,
  backgroundVariant,
};
