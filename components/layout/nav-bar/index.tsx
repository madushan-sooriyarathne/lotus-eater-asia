import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { navLinks } from "@site-data";

import {
  Nav,
  NavLinkWrapper,
  OverlayLogo,
  NavLinkContainer,
  NavLinkMain,
  HamburgerMenu,
  HamburgerIcon,
  OpenButtonLineVariants,
  closeButtonLineOneVariant,
  closeButtonLineTwoVariant,
  NavLink,
  SocialIcon,
  NavOverlayMask,
  OverlayMaskVariant,
  OverlayNavLinksVariant,
  NavLinkSeparatorVariant,
  overlayLogoVariant,
  OverlayBackground,
  backgroundVariant,
  OverlayBackgroundLayer,
  LinkSeparator,
  ContactDetails,
} from "./styles";
import ImageComponent from "../../image";
import { useRouter } from "next/dist/client/router";

const NavBar: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    // set an event listener on window

    const scrollHandler = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Event Handlers

  // menu open handler function
  const handleMenuOpen = () => {
    setMenuOpen((prevState: boolean) => !prevState);
    if (menuOpen) {
      document.body.style.overflow == "hidden";
    }
  };

  // menu navIcon click event handler
  // when clicked on a icon, first we close the menu
  // and the push the next route to next router
  const handleNavLinkClick = (route: string): void => {
    // change the route after 1.5 seconds
    setTimeout(() => router.push(route), 1500);
    setMenuOpen(false);
  };

  return (
    <>
      {/*  Sliding menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <NavOverlayMask
            variants={OverlayMaskVariant}
            initial="start"
            animate="enter"
            exit="exit"
            key="overlay-mask"
          >
            <OverlayBackground variants={backgroundVariant} key="overlay-bg">
              <ImageComponent
                image={{
                  blurUrl: "LGEKV|}=v$:+xaNdE3MzIp$jOX5m",
                  src: "/assets/img/singhagiri-room.jpg",
                  alt: "Stay 3 Nights for price of 2 Nights offer cover image",
                }}
              />
              <OverlayBackgroundLayer />
            </OverlayBackground>

            <OverlayLogo
              src="/assets/logos/lotus-eater-asia-logo-white.svg"
              alt="Lotus Eater Asia - Sri Lanka's exclusive boutique hotel collection"
              variants={overlayLogoVariant}
              key="overlay-logo"
              onClick={() => handleNavLinkClick("/")}
            ></OverlayLogo>

            <NavLinkContainer>
              {navLinks.map((link: NavLink, index: number) => (
                <>
                  <NavLinkMain
                    onClick={() => handleNavLinkClick(link.route)}
                    variants={OverlayNavLinksVariant}
                    key={`overlay-nav-link-${index}`}
                  >
                    {link.name}
                  </NavLinkMain>

                  {index < navLinks.length - 1 && (
                    <LinkSeparator
                      variants={NavLinkSeparatorVariant}
                      key={`overlay-nav-link-separator-${index}`}
                    >
                      /
                    </LinkSeparator>
                  )}
                </>
              ))}
            </NavLinkContainer>
            <ContactDetails variants={overlayLogoVariant} key="overlay-contact">
              <b>Lotus Eater Asia Hotels.</b>
              <br /> +94 77 777 2616 / info@lotuseaterasia.com
            </ContactDetails>
          </NavOverlayMask>
        )}
      </AnimatePresence>
      {/* Always visible floating nav bar with hamburger menu button */}
      <Nav open={menuOpen || !scrolled}>
        <NavLinkWrapper open={!scrolled || menuOpen}>
          <Link href="/contact">
            <NavLink>Contact</NavLink>
          </Link>
          <Link href="/contact">
            <NavLink>Reserve Now</NavLink>
          </Link>
          <a href="#">
            <SocialIcon>
              <use xlinkHref="/assets/svg/sprites.svg#icon-facebook-stripped" />
            </SocialIcon>
          </a>

          <a href="#">
            <SocialIcon>
              <use xlinkHref="/assets/svg/sprites.svg#icon-instagram" />
            </SocialIcon>
          </a>
        </NavLinkWrapper>
        <HamburgerMenu onClick={handleMenuOpen} open={menuOpen}>
          <HamburgerIcon
            width="32"
            height="25"
            viewBox="0 0 32 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <AnimatePresence>
              {menuOpen && (
                <motion.g
                  id="close-btn"
                  variants={{
                    exit: {
                      transition: {
                        delayChildren: 0,
                        staggerChildren: 0.1,
                        duration: 0.5,
                        type: "tween",
                      },
                    },
                  }}
                  initial="start"
                  animate="enter"
                  exit="exit"
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <motion.line
                    variants={closeButtonLineTwoVariant}
                    key="close-line-2"
                    id="close-line-2"
                    x1="6.41421"
                    y1="1"
                    x2="27.6274"
                    y2="22.2132"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <motion.line
                    variants={closeButtonLineOneVariant}
                    key="close-line-1"
                    id="close-line-1"
                    x1="5"
                    y1="22.2132"
                    x2="26.2132"
                    y2="0.999994"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </motion.g>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!menuOpen && (
                <motion.g
                  variants={{
                    exit: {
                      transition: { delayChildren: 0, staggerChildren: 0.1 },
                    },
                  }}
                  id="open-btn"
                  initial="start"
                  animate="enter"
                  exit="exit"
                  transition={{
                    staggerChildren: 0.1,
                    duration: 0.5,
                    delayChildren: 0.5,
                  }}
                >
                  <motion.line
                    variants={OpenButtonLineVariants}
                    key="line-1"
                    id="line-1"
                    x1="1"
                    y1="3"
                    x2="31"
                    y2="3"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <motion.line
                    variants={OpenButtonLineVariants}
                    // initial="start"
                    // animate="enter"
                    // exit="exit"
                    // transition={{ duration: 0.5 }}
                    key="line-2"
                    id="line-2"
                    x1="1"
                    y1="11"
                    x2="31"
                    y2="11"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <motion.line
                    variants={OpenButtonLineVariants}
                    // initial="start"
                    // animate="enter"
                    // exit="exit"
                    // transition={{ duration: 0.5 }}
                    key="line-3"
                    id="line-3"
                    x1="1"
                    y1="19"
                    x2="31"
                    y2="19"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </motion.g>
              )}
            </AnimatePresence>
          </HamburgerIcon>
        </HamburgerMenu>
      </Nav>
    </>
  );
};

export default NavBar;
