import Link from "next/link";

import {
  Section,
  NavigationWrapper,
  Logo,
  NavItem,
  SocialIcon,
  SocialIconWrapper,
  CreditWrapper,
  Credit,
} from "./styles";

import { navLinks, socialLinks } from "../../../site-data";

const Footer: React.FC = (): JSX.Element => {
  return (
    <Section>
      <NavigationWrapper>
        <Logo
          src="/assets/logos/lotus-eater-symbol.svg"
          alt="Lotus Eater Asia Logo"
        />
        {navLinks.map((link) => (
          <Link href={link.route} key={link.route}>
            <NavItem>{link.name}</NavItem>
          </Link>
        ))}
      </NavigationWrapper>
      <SocialIconWrapper>
        {socialLinks.map((social) => (
          <a href={social.link} target="_blank" key={social.name}>
            <SocialIcon>
              <use
                xlinkHref={`/assets/svg/sprites.svg#icon-${social.name.toLowerCase()}`}
              />
            </SocialIcon>
          </a>
        ))}
      </SocialIconWrapper>
      <CreditWrapper>
        <Credit>
          <b>© 2021 Lotus Eater Asia</b>
        </Credit>
        <Credit>
          Website Designed & Developed by{" "}
          <a href="https://madushan.dev" target="_blank">
            Madushan Sooriyarathne
          </a>
        </Credit>
      </CreditWrapper>
    </Section>
  );
};

export default Footer;
