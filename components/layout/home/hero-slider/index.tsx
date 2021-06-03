import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clamp } from "@utils";

import {
  Overlay,
  Logo,
  OverlayContent,
  OverlayTextHeading,
  Slide,
  SliderAnchorBorder,
  SliderAnchorBorderWrapper,
  SliderAnchorIcon,
  SliderAnchorItem,
  SliderAnchorSet,
  sliderAnimation,
  SliderWrapper,
  SubText,
} from "./styles";
import ImageComponent from "@components/image";

interface Props {
  slides: Image[];
}

const HeroSlider: React.FC<Props> = ({ slides }: Props): JSX.Element => {
  const [page, setSelected] = useState<number>(0);

  let timeout: NodeJS.Timeout;
  useEffect(() => {
    timeout = setTimeout(() => paginate(), 6000);
  });

  const paginate = () => {
    setSelected(page + 1);
  };

  const handleClick = (slideNo: number) => {
    setSelected(slideNo);
  };

  const sliderIndex = clamp(page, 0, slides.length);

  return (
    <SliderWrapper>
      <AnimatePresence initial={false}>
        <Overlay>
          <Link href="/">
            <Logo
              src="/assets/logos/lotus-eater-asia-logo-white.svg"
              alt="Luxury Boutique Hotels across Sri Lanka"
            ></Logo>
          </Link>
          <OverlayContent>
            <OverlayTextHeading>
              Privacy, Luxury <br />& Impeccable Service
            </OverlayTextHeading>
            <SubText>
              Only two suites, per property for you to indulge in the
              graciousness of old Ceylon.
            </SubText>
          </OverlayContent>

          <SliderAnchorSet>
            {slides.map((slide, index) => (
              <SliderAnchorItem
                key={index}
                onClick={() => {
                  clearTimeout(timeout);
                  handleClick(index);
                }}
              >
                <SliderAnchorBorderWrapper>
                  <SliderAnchorBorder
                    r="2rem"
                    cx="50%"
                    cy="50%"
                    active={index === sliderIndex}
                  />
                </SliderAnchorBorderWrapper>
                <SliderAnchorIcon active={index === sliderIndex}>
                  <use xlinkHref="/assets/svg/sprites.svg#icon-diamond"></use>
                </SliderAnchorIcon>
              </SliderAnchorItem>
            ))}
          </SliderAnchorSet>
        </Overlay>
        <Slide
          key={sliderIndex}
          variants={sliderAnimation}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <ImageComponent image={slides[sliderIndex]} />
        </Slide>
      </AnimatePresence>
    </SliderWrapper>
  );
};

export default HeroSlider;
