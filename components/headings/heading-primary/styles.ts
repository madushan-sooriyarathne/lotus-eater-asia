import styled from "styled-components";

interface HeadingProps {
  alignment: TextAlignment;
  light?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) =>
    props.light ? props.theme.colors.primaryLight : props.theme.colors.primary};
  text-align: ${(props) => props.alignment};
`;

export { Heading };
