import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  grid-template-areas: "im de";
  align-items: start;
  justify-items: start;
`;
