import { Head, Html, Main, NextScript } from 'next/document'
import { FontUrl } from 'constants/common/fonts'

const Document = () => (
  <Html>
    {Object.values(FontUrl).map((fontUrl) => (
      <link key={fontUrl} href={fontUrl} rel="preload" as="font" crossOrigin="anonymous" />
    ))}
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
