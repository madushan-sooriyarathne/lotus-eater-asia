import styled from "styled-components";

const Cover = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  height: 100vh;
  padding: 20rem 5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content) 1fr min-content;
  align-items: start;
  justify-items: center;

  gap: 3rem;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.1) 100%
  );
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const HotelNavSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const HotelNavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};

  position: relative;

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;

    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    transform-origin: right center;
  }
`;

const MouseWrapper = styled.div`
  grid-row: 4 / 5;
`;

export { ImageContainer, Cover, HotelNavLink, HotelNavSet, MouseWrapper };
