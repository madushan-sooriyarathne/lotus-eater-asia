import { ReactNode } from "react";
import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  alignment?: TextAlignment;
  light?: boolean;
}

const HeadingSecondary: React.FC<Props> = ({
  children,
  alignment = "center",
  light = false,
}: Props): JSX.Element => {
  return (
    <Heading alignment={alignment} light={light}>
      {children}
    </Heading>
  );
};

export default HeadingSecondary;
