import '../styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Skyscrapper | Hack Club" />
        <meta property="og:description" content="TODO" />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="Hack Club" />
        <meta property="og:image" content="TODO" />
        <meta property="og:site_name" content="Skyscrapper | Hack Club" />
        <meta itemProp="name" content="Skyscrapper | Hack Club" />
        <meta itemProp="description" content="TODO" />
        <meta itemProp="image" content="TODO" />
        <meta name="description" content="TODO" />
        <meta name="author" content="Hack Club" />
        <meta name="twitter:title" content="Skyscrapper | Hack Club" />
        <meta name="twitter:description" content="TODO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="TODO" />
        <meta
          name="apple-mobile-web-app-title"
          content="Skyscrapper | Hack Club"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
