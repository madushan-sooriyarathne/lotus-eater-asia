import { ReactNode } from "react";
import { Para } from "./styles";

interface Props {
  children: ReactNode;
  alignment?: TextAlignment;
}

const Paragraph: React.FC<Props> = ({
  children,
  alignment = "justify",
}: Props): JSX.Element => {
  return <Para alignment={alignment}>{children}</Para>;
};

export default Paragraph;
