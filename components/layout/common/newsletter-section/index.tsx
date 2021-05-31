import { useState } from "react";
import Link from "next/link";

import { useInput } from "../../../../hooks";
import ActionButton from "../../../buttons/button-action";

import HeadingSecondary from "../../../headings/heading-secondary";
import HeadingTertiary from "../../../headings/heading-tertiary";
import InputField from "../../../input-field";
import Paragraph from "../../../paragraph";
import TextGroup from "../../../text-group";

import { ContentGroup, InputFieldWrapper, Section } from "./styles";
import ImageComponent from "../../../image";

const NewsletterSection: React.FC = (): JSX.Element => {
  // email field state
  const [email, updateEmail, resetEmail] = useInput("");

  // state for the loading spinner
  const [loading, setLoading] = useState<boolean>(false);

  // handle email subscription
  const handleSubscribe = (): void => {
    // TODO: Add the email subscribing logic
    // mimicking the async process
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetEmail();
    }, 2000);
  };

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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          ></InputField>
          <ActionButton onClick={handleSubscribe} loading={loading}>
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
      <ImageComponent
        image={{
          nextGen: "/assets/img/singhagiri-fireplace.avif",
          fallback: "/assets/img/singhagiri-fireplace.avif",
          alt: "Singhagiri Boutiuque Hotel Nuwara Eliya",
        }}
      />
    </Section>
  );
};

export default NewsletterSection;
