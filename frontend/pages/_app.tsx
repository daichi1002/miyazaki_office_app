import React, { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import GenericTemplate from '../components/templates/GenericTemplates'

export const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <Fragment>
      <GenericTemplate title="">
        <CssBaseline />
        <Component {...pageProps} />
      </GenericTemplate>
    </Fragment>
  )
}
export default MyApp
