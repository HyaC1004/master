import "../styles/globals.css";

import type { AppProps } from "next/app";
import { createTheme, ThemeProvider, Container } from "@mui/material";
import DefaultLayout from "../components/layout";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";

const theme = createTheme({
  palette: {
    primary: {
      main:'#E05F5F',
      light:'#F75CA9',
      dark: '#CF3A3A',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    } 
  },
  typography: {
    fontFamily: 'GangwonEdu'
  }
});
export default function App({ Component, pageProps }: AppProps) {
  // console.log("App", Component);

  const { isRaw } = Component as NextPage & { isRaw?: boolean };
  // console.log(isRaw);

  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        {!isRaw && (
          <DefaultLayout>
            <Head>
              <title>여행마렵다</title>
            </Head>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
        {isRaw && <Component {...pageProps} />}
      </ThemeProvider>
    </SessionProvider>
  );
}
