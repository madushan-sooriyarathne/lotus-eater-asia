import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
  cursor: pointer;

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const ButtonText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.primary};
`;

interface SpinnerWrapperProps {
  $loading: boolean;
}

const SpinnerWrapper = styled.div<SpinnerWrapperProps>`
  opacity: ${(props) => (props.$loading ? 1 : 0)};
`;

export { Button, ButtonText, SpinnerWrapper };
