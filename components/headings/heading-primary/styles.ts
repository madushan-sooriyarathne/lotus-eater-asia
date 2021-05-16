import styled from "styled-components";

interface HeadingProps {
  alignment: TextAlignment;
  isDark?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) =>
    props.isDark ? props.theme.colors.black : props.theme.colors.white};
  text-align: ${(props) => props.alignment};

  // Remove this gradient as well
  background: linear-gradient(135deg, #df89b5 10%, #bfd9fe 100%);

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  // TODO: Remove this
  @media only screen and (max-width: 700px) {
    font-size: 5rem;
  }
`;

export { Heading };
