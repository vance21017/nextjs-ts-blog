import type { AppProps } from "next/app";
import Header from "../components/Header";
import "@fontsource/roboto";
import MDXComponents from "../components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
