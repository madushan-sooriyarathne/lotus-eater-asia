import styled from "styled-components";

interface HeadingProps {
  alignment: TextAlignment;
}

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  /* text-transform: uppercase; */
  color: ${(props) => props.theme.colors.primary};
  text-align: ${(props) => props.alignment};
`;

export { Heading };
