import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Helmet } from "react-helmet";

import GtagScript from "../components/GtagScript";

let data = {
  "@context": "http://schema.org/",
  "@type": "Organization",
  name: `Samudhra`,
  url: "https://www.samudhra.com",
  sameAs: [
    "https://facebook.com/samudhrausa-102132237796713/",
    "https://www.instagram.com/samudhrausa/",
    "https://twitter.com/Samudhrausa"
  ]
};

const structuredJSON = JSON.stringify(data);

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-145828496-2');
      `
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>{this.props.styleTags}</Head>
        <Head>
          <meta charSet="utf-8" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-145828496-2"
          />
          {/* We call the function above to inject the contents of the script tag */}
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <link rel="icon" href="/static/images/favicon.jpg" />
          <link rel="apple-touch-icon" href="/custom-icon.png" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </Head>
        <body onContextMenu="return false;">
          <Helmet>
            <script className="structured-data-list" type="application/ld+json">
              {structuredJSON}
            </script>
          </Helmet>
          <Main />
          <NextScript />

          <div id="main" />
        </body>
      </html>
    );
  }
}
