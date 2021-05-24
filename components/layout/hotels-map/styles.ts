import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: minmax(min-content, 1fr);
  grid-template-areas: "tx ma";
  gap: 5rem;
  align-items: center;
  justify-items: start;
`;

const ContentWrapper = styled.div`
  justify-self: end;
  grid-area: tx;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const ContentText = styled.p`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 145%;
  text-align: left;
  color: ${(props) => props.theme.colors.blackLight};

  & > span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MapWrapper = styled.div`
  grid-area: ma;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Map = styled.svg`
  height: 70vh;
  width: auto;
  justify-self: center;
`;

interface MarkerProps {
  active: boolean;
}

const Marker = styled.g<MarkerProps>`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  & path {
    fill: ${(props) =>
      props.active
        ? props.theme.colors.secondaryMedium
        : props.theme.colors.secondaryLight};
    transition: fill 0.4s ease-in-out;
  }

  &:hover {
    transform: translateY(-5px);

    & path {
      fill: ${(props) => props.theme.colors.blackLight};
    }
  }
`;

const MapCard = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: auto;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.close};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 10;
`;

const CloseButton = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;

  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.white};
  transition: transform 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    transform: rotate(90deg);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 3rem;
`;

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

const cardVariants: Variants = {
  start: {
    y: -20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  leave: {
    y: 10,
    opacity: 0,
  },
};

export {
  Section,
  ContentWrapper,
  ContentText,
  MapWrapper,
  Map,
  MapCard,
  CloseButton,
  Image,
  CardContent,
  HeadingGroup,
  cardVariants,
  Marker,
};
