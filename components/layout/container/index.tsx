import { ReactNode } from "react";
import Head from "next/head";

import { Content } from "./styles";

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
      {/* Header Here */}
      {children}
      {/* Footer Here */}
    </Content>
  );
};

export default Container;
