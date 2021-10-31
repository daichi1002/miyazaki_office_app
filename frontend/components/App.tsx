import React, { useState, useEffect, createContext, Fragment } from 'react'
import { AppProps } from 'next/app'

import GenericTemplate from './templates/GenericTemplates'
import SignIn from './molecules/SignIn'

import { getCurrentUser } from '../lib/api/auth'
import { User } from '../interfaces/index'

// グローバルで扱う変数・関数
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

export const App = (props: any) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()

  const { pageProps, Component } = props.Component
  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()
      setIsSignedIn(true)
      setCurrentUser(res?.data.data)
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  // ユーザーが認証済みかどうかでルーティングを決定
  // 未認証だった場合は「/signin」ページに促す

  return (
    <Fragment>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
        {!loading && isSignedIn ? (
          <SignIn />
        ) : (
          <GenericTemplate title="">
            <Component {...props.pageProps} />
          </GenericTemplate>
        )}
      </AuthContext.Provider>
    </Fragment>
  )
}
