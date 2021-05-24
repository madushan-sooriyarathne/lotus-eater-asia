import styled from "styled-components";

const Button = styled.a`
  outline: none;
  border: none;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.blackLight};
  background-color: transparent;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    width: 100%;
    height: 40%;
    background-color: ${(props) => props.theme.colors.primaryMedium};
    transform-origin: center bottom;
    transition: transform 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover {
    &::before {
      transform: scaleY(2);
    }
  }
`;

export { Button };
