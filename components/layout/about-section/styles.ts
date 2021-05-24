import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  grid-template-areas: "co im";
  gap: 10rem;

  align-items: center;
  justify-items: start;
`;

const Image = styled.picture`
  grid-area: im;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.close};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.spread};
  }

  & > img,
  & > source {
    min-width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out 0.1s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ContentWrapper = styled.div`
  grid-area: co;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem;
`;

const ParagraphWrapper = styled.div`
  margin-top: 5rem;
`;

export { Section, Image, ContentWrapper, ParagraphWrapper };
