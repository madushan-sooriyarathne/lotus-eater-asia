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
`;

export { Heading };
