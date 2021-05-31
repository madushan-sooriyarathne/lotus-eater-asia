import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  gap: 5rem;

  align-items: center;
  justify-items: center;
  height: 90vh;
`;

export { Section };
