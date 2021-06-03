import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  min-height: 40rem;
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

export { Card };
