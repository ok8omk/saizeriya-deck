import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_JP } from "@next/font/google";
import { theme } from "styles/theme";
import { ThemeProvider } from "@mui/material/styles";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
});

export default function App({
  Component,
  pageProps: { className, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component
        className={[className, notoSansJp.className].join(" ")}
        {...pageProps}
      />
    </ThemeProvider>
  );
}
