import ImageComponent from "@components/image";
import TextGroup from "@components/text-group";
import { CoverBg, CoverSection, Heading } from "./styles";

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
        <Heading>{heading}</Heading>
      </TextGroup>
    </CoverSection>
  );
};

export default ImageCover;
