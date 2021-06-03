import { sortByTreeOrder } from "framer-motion/types/render/utils/animation";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  min-height: 50rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: minmax(min-content, 1fr);
  grid-template-areas: "im de";
  align-items: start;
  justify-items: start;

  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadows.close};
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.spread};
  }
`;

const CardContent = styled.div`
  grid-area: de;

  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(5, min-content) 1fr;
  row-gap: 1rem;
  align-items: start;
  justify-items: start;
  padding: 5rem;
`;

const RoomDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const RoomDataItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1rem;
`;

const RoomDataIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: ${(props) => props.theme.colors.blackLight};
`;

const RoomDataLabel = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackLight};
`;

const Features = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 150%;
  text-align: left;
  color: ${(props) => props.theme.colors.primary};
`;

const ButtonWrapper = styled.div`
  align-self: end;
`;

export {
  Card,
  CardContent,
  RoomDataWrapper,
  RoomDataItem,
  RoomDataLabel,
  RoomDataIcon,
  Features,
  ButtonWrapper,
};
