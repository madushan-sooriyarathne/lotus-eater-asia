import { ReactNode } from "react";
import Head from "next/head";

import { Content } from "./styles";
import Footer from "../footer";
import NavBar from "../nav-bar";

interface Props {
  children: ReactNode;
  title?: string;
}

const Container: React.FC<Props> = ({
  children,
  title,
}: Props): JSX.Element => {
  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      {/* Header Here */}
      {children}
      {/* Footer Here */}
      <Footer />
    </Content>
  );
};

export default Container;
