import styled from "styled-components";

interface ParaProps {
  alignment: TextAlignment;
  small: boolean;
}

const Para = styled.p<ParaProps>`
  font-size: ${(props) => (props.small ? "1.3rem" : "1.6rem")};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 150%;
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.blackLight};
  margin-bottom: 1rem;

  & > b {
    font-weight: 700;
  }

  & > a {
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.colors.blackLight};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export { Para };
