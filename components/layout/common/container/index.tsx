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
  title,
}: Props): JSX.Element => {
  return (
    <Page>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </Page>
  );
};

export default Container;
