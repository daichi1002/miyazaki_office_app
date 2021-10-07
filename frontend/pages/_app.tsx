import React, { Fragment } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@material-ui/core'
import client from '../graphql/client'
import GenericTemplate from '../components/templates/GenericTemplates'

export const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <Fragment>
      <ApolloProvider client={client}>
        <GenericTemplate title="">
          <CssBaseline />
          <Component {...pageProps} />
        </GenericTemplate>
      </ApolloProvider>
    </Fragment>
  )
}
export default MyApp
