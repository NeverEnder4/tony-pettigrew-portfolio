import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="TonyPettigrew.com is the portfolio website for web developer, Tony Pettigrew. He is interested in all parts of the development process from design to deployment. JavaScript is his native coding toungue. For more information, stop in and check out his portfolio and informational blog articles."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
