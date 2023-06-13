import { AppProps } from "next/app";
import React from "react";

import "@styles/reset.css";
import "@styles/main.css";
import "@styles/icons.css";

import Layout from "@/layouts";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}
