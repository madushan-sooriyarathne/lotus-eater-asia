import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(3, min-content);
  row-gap: 5rem;
  align-items: center;
  justify-items: center;
`;

const ImageGrid = styled.div`
  width: 100%;
  max-height: 60vh;
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "one two fou"
    "one thr fou";
  gap: 3rem;

  & > div {
    max-width: 100%;
    max-height: 100%;

    overflow: hidden;
    background-color: red;
  }

  & > *:nth-child(1) {
    grid-area: one;
  }

  & > *:nth-child(2) {
    grid-area: two;
  }

  & > *:nth-child(3) {
    grid-area: thr;
  }

  & > *:nth-child(4) {
    grid-area: fou;
  }
`;

export { Section, ImageGrid };
