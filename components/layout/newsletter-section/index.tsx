import Link from "next/link";

import { useInput } from "../../../hooks";
import ActionButton from "../../buttons/button-action";

import HeadingSecondary from "../../headings/heading-secondary";
import HeadingTertiary from "../../headings/heading-tertiary";
import InputField from "../../input-field";
import Paragraph from "../../paragraph";
import { Para } from "../../paragraph/styles";
import TextGroup from "../../text-group";

import { ContentGroup, Image, InputFieldWrapper, Section } from "./styles";

const NewsletterSection: React.FC = (): JSX.Element => {
  // email field state
  const [email, updateEmail, resetEmail] = useInput("");

  return (
    <Section>
      <ContentGroup>
        <TextGroup>
          <HeadingSecondary alignment="left">
            Get Latest Deals and Travel News
          </HeadingSecondary>
          <HeadingTertiary>Subscribe to Our Newsletter</HeadingTertiary>
        </TextGroup>
        <InputFieldWrapper>
          <InputField
            name="Email"
            onChange={updateEmail}
            type="email"
            value={email}
          ></InputField>
          <ActionButton onClick={() => {}} loading={true}>
            Subscribe
          </ActionButton>
        </InputFieldWrapper>

        <TextGroup>
          <Paragraph alignment="left" small>
            By submitting this form, I agree to having my personal and contact
            information processed and used for the purpose of marketing
            communications. For more details, Please refer to our{" "}
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            .
          </Paragraph>
          <Paragraph alignment="left" small>
            You can Unsubscribe from these at any time – Just click on the
            "Unsubscribe" link included in each newsletter.
          </Paragraph>
        </TextGroup>
      </ContentGroup>
      <picture>
        <source
          srcSet="/assets/img/singhagiri-fireplace.avif"
          type="image/avif"
        ></source>
        <Image
          src="/assets/img/singhagiri-fireplace.avif"
          alt="Singhagiri Boutiuque Hotel Nuwara Eliya"
        ></Image>
      </picture>
    </Section>
  );
};

export default NewsletterSection;
