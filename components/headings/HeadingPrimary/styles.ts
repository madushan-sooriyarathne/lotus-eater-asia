import styled from "styled-components";

interface HeadingProps {
  alignment: TextAlignment;
  isDark?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) =>
    props.isDark ? props.theme.colors.black : props.theme.colors.white};
  text-align: ${(props) => props.alignment};

  // TODO: Remove this
  @media only screen and (max-width: 700px) {
    font-size: 5rem;
  }
`;

export { Heading };
