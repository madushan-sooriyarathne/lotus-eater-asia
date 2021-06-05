import styled from "styled-components";

const CoverSection = styled.section`
  grid-column: full-start / full-end;
  width: 100%;
  height: 85vh;

  display: grid;
  place-items: center;
  position: relative;
`;

const CoverBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0%;
  right: 0;
  z-index: -1;
  background-color: red;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-image: linear-gradient(
      194deg,
      rgba(37, 37, 37, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    backdrop-filter: blur(3px);
  }
`;

const Heading = styled.h1`
  font-size: 10rem;
  font-weight: 800;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.primaryMedium};
`;

export { CoverSection, CoverBg, Heading };
