import styled from "styled-components";

interface HeadingProps {
  alignment: TextAlignment;
  light?: boolean;
  small?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => (props.small ? "1.4rem" : "2rem")};
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.blackLight};
  text-align: ${(props) => props.alignment};
`;

export { Heading };
