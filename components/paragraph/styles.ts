import styled from "styled-components";

interface ParaProps {
  alignment?: TextAlignment;
}

const Para = styled.p<ParaProps>`
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 150%;
  text-align: ${(props) => props.alignment || "justify"};
  color: ${(props) => props.theme.colors.blackLight};

  & > b {
    font-weight: 700;
  }
`;

export { Para };
