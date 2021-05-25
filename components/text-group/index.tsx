import { ReactNode } from "react";
import { Group } from "./styles";

interface Props {
  children: ReactNode;
  style?: object;
  align?: FlexAlignment;
  justify?: FlexAlignment;
}

const TextGroup: React.FC<Props> = ({
  children,
  style = {},
  align = "flex-start",
  justify = "flex-start",
}: Props): JSX.Element => {
  return (
    <Group align={align} justify={justify} style={style}>
      {children}
    </Group>
  );
};

export default TextGroup;
