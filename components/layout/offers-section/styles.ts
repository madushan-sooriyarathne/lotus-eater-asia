import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: "min-content 1fr min-content";
  grid-template-areas:
    "ti"
    "co"
    "bu";

  align-items: start;
  justify-items: center;
  gap: 5rem;
`;

const OfferContainer = styled.div`
  grid-area: co;

  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: min-content;
  gap: 5rem;
  align-items: start;
  justify-items: start;
`;

export { Section, OfferContainer };
