import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./styles";

interface Props {
  children: ReactNode;
  route: string;
}

const ButtonSecondary: React.FC<Props> = ({
  children,
  route,
}: Props): JSX.Element => {
  return (
    <Link href={route}>
      <Button>{children}</Button>
    </Link>
  );
};

export default ButtonSecondary;
