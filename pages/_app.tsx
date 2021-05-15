import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/Theme";

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
