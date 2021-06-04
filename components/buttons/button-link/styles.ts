import styled from "styled-components";

const Button = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  outline: none;
  color: ${(props) => props.theme.colors.blackLight};
  position: relative;

  &:hover {
    &::before {
      transform: scaleY(1);
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 15px;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    z-index: -1;
    transform-origin: center bottom;
    transform: scaleY(0.2);

    background-color: ${(props) => props.theme.colors.primaryMedium};

    transition: transform 0.2s ease-in-out;
  }
`;

export { Button };
