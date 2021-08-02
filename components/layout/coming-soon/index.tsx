import Counter from "../../counter";
import HeadingPrimary from "../../headings/heading-primary";
import {
  Container,
  DetailsWrapper,
  Logo,
  Credit,
  ContactGroup,
  ContactMessage,
  ContactNumber,
  ContactEmail,
} from "./styles";

const ComingSoon: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Logo
        src="/assets/logos/lotus-eater-asia-logo-white.svg"
        alt="Luxury Boutique Hotel Chain in Sri Lanka"
      ></Logo>
      <DetailsWrapper>
        <HeadingPrimary>Coming Soon</HeadingPrimary>
        <Counter toDate={new Date("Sep 15, 2021 12:00:00")} />
        <ContactGroup>
          <ContactMessage>For Reservations</ContactMessage>
          <ContactNumber>+94 77 777 2616</ContactNumber>
          <ContactEmail href="mailto:info@lotuseaterasia.com">
            info@loutseaterasia.com
          </ContactEmail>
        </ContactGroup>
      </DetailsWrapper>
      <Credit>
        <p>{new Date().getFullYear()} | Lotus Eater Asia</p>
        <p>
          Website Designed & Developed by{" "}
          <a href="https://madushan.dev" target="_blank">
            Madushan Sooriyarathne
          </a>
          .
        </p>
      </Credit>
    </Container>
  );
};

export default ComingSoon;
