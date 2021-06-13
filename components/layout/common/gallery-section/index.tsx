import ButtonPrimary from "@components/buttons/button-primary";
import HeadingPrimary from "@components/headings/heading-primary";
import ImageComponent from "@components/image";
import { Section, ImageGrid } from "./styles";

interface Props {
  images: Image[];
}

const GallerySection: React.FC<Props> = ({ images }: Props): JSX.Element => {
  return (
    <Section>
      <HeadingPrimary>Gallery</HeadingPrimary>
      <ImageGrid>
        {images
          .slice(1, images.length > 5 ? 5 : images.length)
          .map((image: Image, index: number) => (
            <div key={index}>
              <ImageComponent image={image} />{" "}
            </div>
          ))}
      </ImageGrid>
      <ButtonPrimary route="/gallery">View Gallery</ButtonPrimary>
    </Section>
  );
};

export default GallerySection;
