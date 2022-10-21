import Link from 'next/link'
import { Fragment } from 'react'
import Navigator from '../components/common/navigatior'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigator />
      <Component {...pageProps} />
    </Fragment >
  )
}

export default MyApp
