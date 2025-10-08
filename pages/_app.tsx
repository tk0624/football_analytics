// pages/_app.tsx
import type { AppProps } from "next/app";
import { I18nProvider } from "../contexts/I18n";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      {/* 全ページに重ね表示 */}
      <Component {...pageProps} />
    </I18nProvider>
  );
}
