import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 2rem;
  align-items: center;
  justify-items: start;
`;

const HotelLinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 2rem;
`;

const HotelLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondaryLight};
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
`;

export { Section, HotelLinkGroup, HotelLink };
