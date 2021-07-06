import Image from "next/image";
import { ImgBox } from "./styles";

interface Props {
  image: Image;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
}

const ImageComponent: React.FC<Props> = ({
  image,
  x = "center",
  y = "center",
  width = "100%",
  height = "100%",
}: Props): JSX.Element => {
  return (
    <ImgBox width={width} height={height}>
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        objectPosition={`${x} ${y}`}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${image.blurUrl}`}
      />
    </ImgBox>
  );
};

export default ImageComponent;
