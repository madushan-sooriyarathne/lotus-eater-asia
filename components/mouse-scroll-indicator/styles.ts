import styled, { keyframes } from "styled-components";
import { motion, Variants } from "framer-motion";

interface IconProps {
  small: boolean;
}

const scroll = keyframes`
    from {
        opacity: .8;
        transform: translateY(0);
    }
    to {
        opacity: .2;
        transform: translateY(3rem);
    }
`;

const Icon = styled(motion.svg)<IconProps>`
  height: ${(props) => (props.small ? "5rem" : "8rem")};
  width: auto;

  & #mouse-shell {
    stroke: ${(props) => props.theme.colors.white};
  }

  & #mouse-wheel {
    fill: ${(props) => props.theme.colors.white};
    animation: ${scroll} 1s ease-in-out infinite forwards;
  }
`;

// Motion variant
const iconVariant: Variants = {
  start: {
    y: "4rem",
    opacity: 0,
  },
  enter: {
    y: "0rem",
    opacity: 1,
  },
  exit: {
    y: "-4rem",
    opacity: 0,
  },
};

export { Icon, iconVariant };
