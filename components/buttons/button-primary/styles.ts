import styled from "styled-components";

interface ButtonProps {
  light: boolean;
}

const ButtonWrapper = styled.a<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  position: relative;

  cursor: pointer;

  & > * {
    z-index: 1;
    &:first-child {
      margin-right: 1rem;
    }
  }

  &::before {
    content: "";
    position: absolute;

    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    transform-origin: center left;
    background-color: ${(props) =>
      props.light ? props.theme.colors.white : props.theme.colors.blackLight};
    transition: width 0.3s cubic-bezier(0.77, 0, 0.175, 1);

    will-change: width;
  }

  & > p {
    color: ${(props) =>
      props.light ? props.theme.colors.white : props.theme.colors.blackLight};
    transition: color 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out;
  }

  & > svg {
    fill: ${(props) =>
      props.light ? props.theme.colors.black : props.theme.colors.white};

    & #arrow-body path {
      stroke: ${(props) =>
        props.light ? props.theme.colors.black : props.theme.colors.white};
    }

    & #arrow-head path {
      stroke: ${(props) =>
        props.light ? props.theme.colors.black : props.theme.colors.white};
    }
  }

  &:hover {
    &::before {
      width: 110%;
    }

    & > p {
      color: ${(props) =>
        props.light ? props.theme.colors.blackLight : props.theme.colors.white};
      transform: translateX(10px);
    }

    & > svg {
      transform: translateX(5px);

      & #arrow-body path {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

const ButtonIcon = styled.svg`
  width: 3rem;
  height: 1.5rem;

  transition: transform 0.2s ease-in-out;
  transform: translateX(-55%);

  & #arrow-body path {
    opacity: 0;
    transform: translateX(-10px);

    transition: transform 0.2s ease-in, opacity 0.2s ease-in;
  }
`;

const ButtonText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export { ButtonWrapper, ButtonIcon, ButtonText };
