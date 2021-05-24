import Link from "next/link";
import { ReactNode } from "react";
import { ButtonWrapper, ButtonIcon, ButtonText } from "./styles";

interface Props {
  children: ReactNode;
  route: string;
}

const ButtonPrimary: React.FC<Props> = ({
  children,
  route,
}: Props): JSX.Element => {
  return (
    <Link href={route}>
      <ButtonWrapper>
        <ButtonIcon
          width="39"
          height="16"
          viewBox="0 0 39 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow-body">
            <path
              id="body"
              d="M0 8H37.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>
          <g id="arrow-head">
            <path
              id="high-head"
              d="M31 1L38 8"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              id="low-head"
              d="M31 15.0004L38.0004 8"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </ButtonIcon>
        <ButtonText>{children}</ButtonText>
      </ButtonWrapper>
    </Link>
  );
};

export default ButtonPrimary;
