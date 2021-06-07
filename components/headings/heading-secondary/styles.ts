import styled from "styled-components";

interface HeadingProps {
  alignment: TextAlignment;
  light?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 140%;
  /* text-transform: uppercase; */
  color: ${(props) =>
    props.light ? props.theme.colors.white : props.theme.colors.blackLight};
  text-align: ${(props) => props.alignment};

  background: ${(props) =>
    props.light
      ? props.theme.gradients.textLight
      : props.theme.gradients.textBlack};

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { Heading };
