import styled, { css } from "styled-components";

interface ImgBoxProps {
  width: string;
  height: string;
}

// const ImgBox = styled.img<ImgBoxProps>`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: ${(props) => `${props.x} ${props.y}`};
// `;

const ImgBox = styled.div<ImgBoxProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  position: relative;
`;

export { ImgBox };
