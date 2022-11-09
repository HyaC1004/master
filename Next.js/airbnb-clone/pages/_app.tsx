import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react";
import { NextPage } from 'next';
import { createTheme, ThemeProvider } from '@mui/material';

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
  // console.log("App ", Component);
  const { isInLayout } = Component as (NextPage & {isInLayout?: boolean});
  // console.log(isInLayout);
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        {isInLayout &&(
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
        {!isInLayout && <Component {...pageProps} />}
      </SessionProvider>
    </ThemeProvider>
  )
}
