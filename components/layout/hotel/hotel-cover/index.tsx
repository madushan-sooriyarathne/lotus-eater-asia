import { useEffect, useState } from "react";
import HeadingPrimary from "@components/headings/heading-primary";
import ImageComponent from "@components/image";
import MouseScrollIndicator from "@components/mouse-scroll-indicator";
import {
  Cover,
  HotelNavLink,
  HotelNavSet,
  ImageContainer,
  MouseWrapper,
} from "./styles";

interface Props {
  hotel: Hotel;
}

const HotelCover: React.FC<Props> = ({ hotel }: Props): JSX.Element => {
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
        <ImageComponent image={hotel.images[0]} />
      </ImageContainer>
      <HeadingPrimary light>{hotel.name}</HeadingPrimary>
      <HotelNavSet>
        <HotelNavLink href="#overview">Overview</HotelNavLink>
        <HotelNavLink href="#rooms">Rooms</HotelNavLink>
        <HotelNavLink href="#location">Location</HotelNavLink>
        {hotel.offers && hotel.offers.length < 1 && (
          <HotelNavLink href="#offers">Offers</HotelNavLink>
        )}
      </HotelNavSet>
      <MouseWrapper>
        <MouseScrollIndicator small={false} show={showScrollIndicator} />
      </MouseWrapper>
    </Cover>
  );
};

export default HotelCover;
