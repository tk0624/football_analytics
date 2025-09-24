// pages/_app.tsx
import type { AppProps } from "next/app";
import { I18nProvider } from "../contexts/I18n";
import LanguageSwitch from "../components/LanguageSwitch";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      {/* 全ページに重ね表示 */}
      <LanguageSwitch />
      <Component {...pageProps} />
    </I18nProvider>
  );
}
