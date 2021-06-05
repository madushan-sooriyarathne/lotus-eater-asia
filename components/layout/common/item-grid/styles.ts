import styled from "styled-components";

const GridSection = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: max-content;
  align-items: start;
  justify-content: center;
  gap: 5rem;
`;

export { GridSection };
