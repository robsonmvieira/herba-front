import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { UserAuthProvider } from '../hooks/userAuth'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserAuthProvider>
      <Head>
        <link rel="stylesheet" href="nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </UserAuthProvider>
  )
}

export default MyApp
