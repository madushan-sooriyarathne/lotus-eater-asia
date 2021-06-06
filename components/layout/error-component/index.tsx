import ButtonPrimary from "@components/buttons/button-primary";
import HeadingLarge from "@components/headings/heading-large";
import HeadingSecondary from "@components/headings/heading-secondary";
import HeadingTertiary from "@components/headings/heading-tertiary";
import ImageComponent from "@components/image";
import TextGroup from "@components/text-group";
import { ErrorContainer, ImageBg } from "./styles";

interface Props {
  errorCode: number;
}

const errorObjects = [
  {
    code: 404,
    heading: "Four O' Four",
    subHeading: "Looks like you are lost!",
  },
  {
    code: 500,
    heading: "Internal Server Error",
    subHeading:
      "Sorry! We encountered an error on our server while processing your request!",
  },
];

const ErrorComponent: React.FC<Props> = ({ errorCode }: Props): JSX.Element => {
  const errObj = errorObjects.find((item) => item.code === errorCode);
  return (
    <ErrorContainer>
      <ImageBg>
        <ImageComponent
          image={{
            fallback: "/assets/img/error-bg.jpg",
            nextGen: "/assets/img/error-bg.avif",
            alt: `${errorCode} page - Background Image | Lotus Eater Asia Hotels`,
          }}
        />
      </ImageBg>
      <TextGroup justify="center">
        <HeadingLarge>{errObj?.heading}</HeadingLarge>
        <HeadingSecondary light>{errObj?.subHeading}</HeadingSecondary>
      </TextGroup>
      <ButtonPrimary route="/" light>
        Go back to home
      </ButtonPrimary>
    </ErrorContainer>
  );
};

export default ErrorComponent;
