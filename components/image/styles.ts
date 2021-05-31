import styled, { css } from "styled-components";

interface ImgBoxProps {
  x: string;
  y: string;
}

const ImgBox = styled.img<ImgBoxProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  object-position: ${(props) => `${props.x} ${props.y}`};
`;

export { ImgBox };
