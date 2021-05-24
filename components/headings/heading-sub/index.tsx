import { ReactNode } from "react";
import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  alignment?: TextAlignment;
  small?: boolean;
}

const HeadingSub: React.FC<Props> = ({
  children,
  alignment = "center",
  small = false,
}: Props): JSX.Element => {
  return (
    <Heading alignment={alignment} small={small}>
      {children}
    </Heading>
  );
};

export default HeadingSub;
