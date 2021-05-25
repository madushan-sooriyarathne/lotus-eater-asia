import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

`;

interface SpinnerProps {
  small: boolean;
}

const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => (props.small ? "2rem" : "6rem")};
  height: ${(props) => (props.small ? "2rem" : "6rem")};
  border-radius: 100%;
  border: ${(props) => `2px solid ${props.theme.colors.primaryLight}`};
  border-top-color: ${(props) => props.theme.colors.primary};

  animation: ${spin} 1s infinite;
`;

export { Spinner };
