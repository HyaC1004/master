import "../styles/globals.css";

import type { AppProps } from "next/app";
import { createTheme, ThemeProvider, Container, Backdrop, CircularProgress } from "@mui/material";
import DefaultLayout from "../components/layout";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";
import mongooseInit from "../lib/mongooseInit";
import { createContext, useState } from "react";
import DetailLayout from "../components/layout/detail-layout";

const theme = createTheme({
  palette: {
    primary: {
      main:'#E05F5F',
      light:'#F75CA9',
      dark: '#CF3A3A',
      contrastText: '#000',
    },
    secondary: {
      light: '#5397F5',
      main: '#53B9F5',
      dark: '#1f385c',
      contrastText: '#000',
    } 
  },
  typography: {
    fontFamily: 'GangwonEdu'
  }
});

export const AppContext = createContext<{
  ready: () => void;
  done: () => void;
} | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  // console.log("App", Component);
  
  const { isRaw } = Component as NextPage & { isRaw?: boolean };
  const { isDetail } = Component as NextPage & { isDetail?: boolean };
  // console.log(isRaw);
  const [loading, setLoading] = useState<boolean>(false);
  const ready = () => {
    setLoading(true);
  };
  const done = () => {
    setLoading(false);
  };
  return (
    <AppContext.Provider value={{ ready, done }}>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          {(!isRaw && !isDetail) && (
            <DefaultLayout>
              <Head>
                <title>여행마렵다</title>
              </Head>
              <Component {...pageProps} />
            </DefaultLayout>
          )}
          {(isRaw && isDetail) && (
            <DetailLayout>
            <Head>
              <title>여행마렵다</title>
            </Head>
            <Component {...pageProps} />
          </DetailLayout>
          )}
          {(isRaw && !isDetail) && <Component {...pageProps} />}
          <Backdrop open={loading} sx={{ color: "#fff", zIndex: 9999999 }}>
            <CircularProgress color="info" />
          </Backdrop>
        </ThemeProvider>
      </SessionProvider>
    </AppContext.Provider>
  );
}
