import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas: "ti" "gr";
  row-gap: 5rem;
  align-items: center;
  justify-items: center;
`;

const OfferCardsGroup = styled.div`
  grid-area: gr;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: max-content;
  align-items: start;
  justify-content: center;
  gap: 5rem;
`;

export { Section, OfferCardsGroup };
