import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_JP } from "@next/font/google";
import { theme } from "styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { SWRConfig } from "swr";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
});

export default function App({
  Component,
  pageProps: { className, ...pageProps },
}: AppProps) {
  return (
    <>
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${GA_ID}');
           `,
            }}
          />
        </>
      )}
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ThemeProvider theme={theme}>
          <Component
            className={[className, notoSansJp.className].join(" ")}
            {...pageProps}
          />
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
