import { useEffect, useState } from "react";
import HeadingPrimary from "../../../headings/heading-primary";
import ImageComponent from "../../../image";
import MouseScrollIndicator from "../../../mouse-scroll-indicator";
import {
  Cover,
  HotelNavLink,
  HotelNavSet,
  ImageContainer,
  MouseWrapper,
} from "./styles";

interface Props {
  name: string;
  coverImage: Image;
}

const HotelCover: React.FC<Props> = ({
  name,
  coverImage,
}: Props): JSX.Element => {
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true);

  useEffect(() => {
    // set event listener on window object to listen to mouse scroll event
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    });

    // remove the event listen when component un-mount
    return (() => {
      window.removeEventListener("scroll", () => {});
    })();
  }, []);

  return (
    <Cover>
      <ImageContainer>
        <ImageComponent image={coverImage} />
      </ImageContainer>
      <HeadingPrimary light>{name}</HeadingPrimary>
      <HotelNavSet>
        <HotelNavLink href="#overview">Overview</HotelNavLink>
        <HotelNavLink href="#rooms">Rooms</HotelNavLink>
        <HotelNavLink href="#location">Location</HotelNavLink>
        <HotelNavLink href="#offers">Offers</HotelNavLink>
      </HotelNavSet>
      <MouseWrapper>
        <MouseScrollIndicator small={false} show={showScrollIndicator} />
      </MouseWrapper>
    </Cover>
  );
};

export default HotelCover;
