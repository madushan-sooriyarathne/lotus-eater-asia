import styled from "styled-components";

interface HeadingProps {
  alignment: TextAlignment;
  light?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2.4rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.blackLight};
  text-align: ${(props) => props.alignment};
`;

export { Heading };
