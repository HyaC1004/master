import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react";
import { NextPage } from 'next';

export default function App({ Component, pageProps }: AppProps) {
  console.log("App ", Component);
  const { isInLayout } = Component as (NextPage & {isInLayout?: boolean});
  console.log(isInLayout);
  return (
    <SessionProvider>
      {isInLayout &&(
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      {!isInLayout && <Component {...pageProps} />}
    </SessionProvider>
  )
}
