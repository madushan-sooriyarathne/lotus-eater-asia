import styled from "styled-components";

const Section = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  min-height: 90vh;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: 1fr;
  grid-template-areas: "mp de";

  align-items: start;
  justify-content: start;

  background-color: ${(props) => props.theme.colors.secondaryLight};
`;

const MapBox = styled.div`
  grid-area: mp;

  width: 100%;
  height: 100%;
`;

const LocationDetails = styled.div`
  grid-area: de;

  width: 100%;
  height: 100%;
  padding: 10rem;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-auto-rows: min-content;
  row-gap: 3rem;
  align-items: start;
  justify-items: start;
  z-index: 1;

  & a {
    margin-bottom: 2rem;
  }
`;

export { Section, MapBox, LocationDetails };
