import { ReactNode } from "react";
import Head from "next/head";

import Footer from "@layouts/footer";
import NavBar from "@layouts/nav-bar";

import { Content, Page } from "./styles";

interface Props {
  children: ReactNode;
  title?: string;
}

const Container: React.FC<Props> = ({
  children,
  title = "Luxury Boutique Hotels in Sri Lanka",
}: Props): JSX.Element => {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ x: "100%", opacity: 1, transition: { duration: 0.5 } }}
      key={title.replace(" ", "_").toLowerCase()}
    >
      <Head>
        <title>{`${title} | Lotus Eater Asia Hotels`}</title>
      </Head>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </Page>
  );
};

export default Container;
