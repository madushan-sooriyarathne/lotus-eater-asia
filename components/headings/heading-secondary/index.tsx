import { ReactNode } from "react";
import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  alignment?: TextAlignment;
}

const HeadingSecondary: React.FC<Props> = ({
  children,
  alignment = "center",
}: Props): JSX.Element => {
  return <Heading alignment={alignment}>{children}</Heading>;
};

export default HeadingSecondary;
