import "../styles/globals.css";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
