import HeadingLarge from "@components/headings/heading-large";
import ImageComponent from "@components/image";
import TextGroup from "@components/text-group";
import { CoverBg, CoverSection } from "./styles";

interface Props {
  image: Image;
  heading: string;
}

const ImageCover: React.FC<Props> = ({
  image,
  heading,
}: Props): JSX.Element => {
  return (
    <CoverSection>
      <CoverBg>
        <ImageComponent image={image} />
      </CoverBg>
      <TextGroup>
        <HeadingLarge>{heading}</HeadingLarge>
      </TextGroup>
    </CoverSection>
  );
};

export default ImageCover;
