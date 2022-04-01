import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { ColorModeScript } from "nextjs-color-mode";
import React, { PropsWithChildren } from "react";

import Footer from "components/Footer";
import { GlobalStyle } from "components/GlobalStyles";
import Navbar from "components/Navbar";
import NavigationDrawer from "components/NavigationDrawer";
import { NavItems } from "types";

const navItems: NavItems = [
  { title: "Docs", href: "/docs" },
  { title: "About", href: "/about" },
  { title: "Features", href: "/features" },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>

      <ColorModeScript />
      <GlobalStyle />
      <Providers>
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return <NavigationDrawer items={navItems}>{children}</NavigationDrawer>;
}

export default MyApp;
