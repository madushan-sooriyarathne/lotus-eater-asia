import { Spinner } from "./styles";

interface Props {
  small?: boolean;
}

const LoadingSpinner: React.FC<Props> = ({
  small = true,
}: Props): JSX.Element => {
  return <Spinner small={small} />;
};

export default LoadingSpinner;
