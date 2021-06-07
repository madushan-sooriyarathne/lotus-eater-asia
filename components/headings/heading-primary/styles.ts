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

  background: ${(props) =>
    props.light
      ? props.theme.gradients.textLight
      : props.theme.gradients.textDark};

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { Heading };
