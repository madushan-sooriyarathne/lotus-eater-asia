import { ImgBox } from "./styles";

interface Props {
  image: Image;
  x?: string;
  y?: string;
}

const ImageComponent: React.FC<Props> = ({
  image,
  x = "center",
  y = "center",
}: Props): JSX.Element => {
  return (
    <picture>
      <source srcSet={image.nextGen} type="image/avif" />
      <ImgBox x={x} y={y} src={image.fallback} alt={image.alt} />
    </picture>
  );
};

export default ImageComponent;
