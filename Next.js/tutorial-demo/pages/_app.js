
import { Fragment } from 'react'
import Navigator from '../components/navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Fragment>
    <Navigator />
    <Component {...pageProps} />
  </Fragment>
  )
}

export default MyApp
