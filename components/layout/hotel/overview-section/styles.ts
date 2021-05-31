import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  grid-template-areas: "su ti";
  column-gap: 10rem;
  align-items: center;
  justify-items: start;
`;

const SummeryContainer = styled.div`
  grid-area: su;

  width: 100%;
  height: 100%;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, minmax(min-content, 1fr));
  gap: 5rem;
  align-items: center;
  justify-items: center;
`;

const TitleContainer = styled.div`
  grid-area: ti;

  display: flex;
  align-items: center;
  justify-content: start;
`;

const SummeryItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: ${(props) => `1px solid ${props.theme.colors.primaryLight}`};
  /* background-color: red; */
`;

export { Section, SummeryContainer, TitleContainer, SummeryItem };
