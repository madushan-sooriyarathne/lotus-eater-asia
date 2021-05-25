import { ReactNode } from "react";
import { Para } from "./styles";

interface Props {
  children: ReactNode;
  alignment?: TextAlignment;
  small?: boolean;
}

const Paragraph: React.FC<Props> = ({
  children,
  alignment = "justify",
  small = false,
}: Props): JSX.Element => {
  return (
    <Para alignment={alignment} small={small}>
      {children}
    </Para>
  );
};

export default Paragraph;
