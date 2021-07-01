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
    // <picture>
    //   <source srcSet={image.nextGen} type="image/avif" />
    //   <ImgBox x={x} y={y} src={image.fallback} alt={image.alt} loading="lazy" />
    // </picture>

    <ImgBox width={width} height={height}>
      <Image
        src={image.fallback}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        objectPosition={`${x} ${y}`}
      />
    </ImgBox>
  );
};

export default ImageComponent;
