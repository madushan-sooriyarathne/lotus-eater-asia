import styled from "styled-components";

const Heading = styled.h1`
  font-size: 10rem;
  font-weight: 800;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.primaryMedium};

  background: ${(props) => props.theme.gradients.textLight};

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { Heading };
