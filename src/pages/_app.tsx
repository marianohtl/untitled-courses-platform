import { AppProps } from "next/app";
import React from "react";

import "@/assets/css/reset.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>;
}
