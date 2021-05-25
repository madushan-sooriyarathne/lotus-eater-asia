import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  grid-template-areas: "co im";
  gap: 5rem;
  align-items: start;
  justify-content: start;
`;

const ContentGroup = styled.div`
  width: 85%;

  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputFieldWrapper = styled.div`
  align-self: stretch;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) min-content;
  gap: 1rem;
  align-items: end;
  justify-items: start;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { Section, ContentGroup, TitleGroup, InputFieldWrapper, Image };
