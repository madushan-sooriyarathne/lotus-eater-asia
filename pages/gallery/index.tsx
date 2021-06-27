import Container from "@components/layout/common/container";
import ImageCover from "@components/layout/common/image-cover";
import GalleryNav from "@components/layout/gallery/gallery-nav";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { slides, hotels } from "@site-data";
import ItemGrid from "@components/layout/common/item-grid";
import ImageComponent from "@components/image";

interface Props {
  images: Image[];
  hotels: Hotel[];
}

const GalleryPage: React.FC<Props> = ({
  images,
  hotels,
}: Props): JSX.Element => {
  return (
    <Container>
      <ImageCover heading="Gallery" image={images[0]} />
      <GalleryNav hotels={hotels}></GalleryNav>
      <ItemGrid>
        {images.map((img) => (
          <ImageComponent image={img} />
        ))}
      </ItemGrid>
    </Container>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      images: slides,
      hotels: hotels,
    },
  };
};

export { getStaticProps };
export default GalleryPage;
