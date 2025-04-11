import { WikiProvider } from "@/context/wikiContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SIAPESQ</title>
        <meta name="description" content="Acesso à plataforma SIAPESQ" />
      </Head>
      <WikiProvider>
        <Component {...pageProps} />
      </WikiProvider>
    </>
  );
}
