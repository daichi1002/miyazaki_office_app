import React, { Fragment, createContext, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@material-ui/core'
import client from '../graphql/client'
import GenericTemplate from '../components/templates/GenericTemplates'
import { User } from '../interfaces/index'
import SignIn from '../components/molecules/SignIn'
import SignUp from './signup'
import { getCurrentUser } from '../lib/api/auth'
import { useRouter } from 'next/dist/client/router'

export const AuthContext = createContext(
  {} as {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    isSignedIn: boolean
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
    currentUser: User | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
  }
)

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()
  const router = useRouter()

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()
      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  if (loading) return <p>loading...</p>
  return (
    <Fragment>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
        <ApolloProvider client={client}>
          <GenericTemplate title="">
            {!loading && !isSignedIn ? (
              router.route !== '/' ? (
                <SignUp />
              ) : (
                <SignIn />
              )
            ) : (
              <Fragment>
                <CssBaseline />
                <Component {...pageProps} />
              </Fragment>
            )}
          </GenericTemplate>
        </ApolloProvider>
      </AuthContext.Provider>
    </Fragment>
  )
}
export default MyApp
