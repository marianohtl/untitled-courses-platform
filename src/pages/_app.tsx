import { AppProps } from "next/app";
import React from "react";

import "@/assets/css/reset.css";
import "@/assets/css/icons.css";

import Layout from "@/layouts";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}
