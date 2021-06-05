import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(3, min-content);
  gap: 2rem;
  align-items: start;
  justify-items: start;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 50rem;
`;

export { Card, ImageWrapper };
