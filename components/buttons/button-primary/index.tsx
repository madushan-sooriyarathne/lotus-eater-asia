import { ButtonWrapper, ButtonIcon, ButtonText } from "./styles";

const ButtonPrimary: React.FC = (): JSX.Element => {
  return (
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
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </g>
        <g id="arrow-head">
          <path
            id="high-head"
            d="M31 1L38 8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            id="low-head"
            d="M31 15.0004L38.0004 8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g>
      </ButtonIcon>
      <ButtonText>Learn More</ButtonText>
    </ButtonWrapper>
  );
};

export default ButtonPrimary;
