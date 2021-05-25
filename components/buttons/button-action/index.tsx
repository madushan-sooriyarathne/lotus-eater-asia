import { ReactNode } from "react";
import LoadingSpinner from "../../loading-spinnter";

import { Button, ButtonText } from "./styles";

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
      {loading && <LoadingSpinner />}
    </Button>
  );
};

export default ActionButton;
