import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content);
  row-gap: 5rem;
  align-items: center;
  justify-items: center;
`;

const RoomContainer = styled.div`
  width: 95%;
  height: auto;

  display: flex;
  row-gap: 5rem;
  flex-direction: column;
  align-items: center;
`;

export { Section, RoomContainer };
