import { ReactNode } from "react";
import { Button } from "./styles";

interface Props {
  children: ReactNode;
  link: string;
  blank?: boolean;
}

const ButtonLink: React.FC<Props> = ({
  children,
  link,
  blank = true,
}: Props): JSX.Element => {
  return (
    <Button
      href={link}
      target={blank ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </Button>
  );
};

export default ButtonLink;
