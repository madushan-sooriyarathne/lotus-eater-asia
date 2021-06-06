import styled from "styled-components";

const ErrorContainer = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: minmax(max-content, 1fr);
  grid-template-rows: repeat(2, min-content);
  row-gap: 5rem;
  align-content: center;
  align-items: center;
  justify-items: center;

  padding: 10rem 20rem;

  position: absolute;
`;

const ImageBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    backdrop-filter: blur(5px);
  }
`;

export { ErrorContainer, ImageBg };
