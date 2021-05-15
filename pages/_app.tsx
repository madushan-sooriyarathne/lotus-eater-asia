import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global-styles";
import theme from "../styles/theme";

import "../styles/fonts.css";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          Lotus Eater Asia | Luxury Boutique Hotel Group | Sri Lanka
        </title>
        {/* Viewport meta tags here */}
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
