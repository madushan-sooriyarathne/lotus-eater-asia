import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class AppDocument extends Document {
  // styled component ssr styling
  static async getInitialProps(context: DocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps: DocumentInitialProps = await Document.getInitialProps(
        context
      );
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Inter:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
