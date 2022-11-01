import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CounterProvider } from '../context/counter-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <CounterProvider>
    <Component {...pageProps} />
  </CounterProvider>
  )
}
