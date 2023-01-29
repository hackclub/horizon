import '../styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Horizon - high school all-girls hackathon in NYC"
        />
        <meta
          property="og:description"
          content="Horizon is an all-girls hackathon taking place in NYC, in a collaboration between Hack Club and the Girl Scouts of Greater NY!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="Hack Club" />
        <meta property="og:image" content="TODO" />
        <meta property="og:site_name" content="Hack Club" />
        <meta
          itemProp="name"
          content="Horizon - high school all-girls hackathon in NYC"
        />
        <meta
          itemProp="description"
          content="Horizon is an all-girls hackathon taking place in NYC, in a collaboration between Hack Club and the Girl Scouts of Greater NY."
        />
        <meta
          itemProp="image"
          content="https://skyscrapper.hackclub.com/meta.png"
        />
        <meta
          name="description"
          content="Horizon is an all-girls hackathon taking place in NYC, in a collaboration between Hack Club and the Girl Scouts of Greater NY."
        />
        <meta name="author" content="Hack Club" />
        <meta name="twitter:site" content="@hackclub" />
        <meta
          name="twitter:title"
          content="Horizon - high school all-girls hackathon in NYC"
        />
        <meta
          name="twitter:description"
          content="Horizon is an all-girls hackathon taking place in NYC, in a collaboration between Hack Club and the Girl Scouts of Greater NY."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://skyscrapper.hackclub.com/meta.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Horizon - high school all-girls hackathon in NYC"
        />
        <meta name="theme-color" content="#1c2e32" />
        <meta name="msapplication-TileColor" content="#1c2e32" />
        <link
          rel="mask-icon"
          href="https://assets.hackclub.com/favicons/safari-pinned-tab.svg"
          color="#1c2e32"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://assets.hackclub.com/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://assets.hackclub.com/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://assets.hackclub.com/favicons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://assets.hackclub.com/favicons/site.webmanifest"
        />
        <title>Horizon - high school all-girls hackathon in NYC</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}