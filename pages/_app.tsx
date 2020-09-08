import type { AppProps } from "next/app";

import "tailwind/index.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
