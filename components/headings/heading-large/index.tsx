import { ReactNode } from "react";

import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  larger?: boolean;
}

const HeadingLarge: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <Heading>{children}</Heading>;
};

export default HeadingLarge;
