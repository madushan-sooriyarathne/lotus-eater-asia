import { ReactNode } from "react";
import LoadingSpinner from "../../loading-spinnter";

import { Button, ButtonText, SpinnerWrapper } from "./styles";

interface Props {
  children: ReactNode;
  loading: boolean;
  onClick: () => void;
  invert?: boolean;
}

const ActionButton: React.FC<Props> = ({
  children,
  loading,
  onClick,
  invert,
}: Props): JSX.Element => {
  return (
    <Button onClick={onClick}>
      <ButtonText>{children}</ButtonText>
      <SpinnerWrapper $loading={loading}>
        <LoadingSpinner />
      </SpinnerWrapper>
    </Button>
  );
};

export default ActionButton;
