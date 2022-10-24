import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import Layout from '../components/common/layout'
import Navigator from '../components/common/navigatior'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
