import HeadingPrimary from "@components/headings/heading-primary";
import ImageComponent from "@components/image";
import TextGroup from "@components/text-group";
import { CoverBg, CoverSection } from "./styles";

interface Props {
  image: Image;
  heading: string;
  subHeading: string;
}

const ImageCover: React.FC<Props> = ({
  image,
  heading,
  subHeading,
}: Props): JSX.Element => {
  return (
    <CoverSection>
      <CoverBg>
        <ImageComponent image={image} />
      </CoverBg>
      <TextGroup>
        <HeadingPrimary light>Our Properties</HeadingPrimary>
      </TextGroup>
    </CoverSection>
  );
};

export default ImageCover;
