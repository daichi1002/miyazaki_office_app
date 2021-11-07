import { useState, useContext, Fragment } from 'react'
import { useRouter } from 'next/dist/client/router'
import Cookies from 'js-cookie'
import Link from 'next/dist/client/link'

import { makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import AlertMessage from './AlertMessage'

import { AuthContext } from '../../pages/_app'
import { signIn } from '../../lib/api/auth'
import { SignInParams } from '../../interfaces/index'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 'auto',
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    textTransform: 'none',
  },
  header: {
    textAlign: 'center',
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 400,
  },
  box: {
    marginTop: '2rem',
  },
  link: {
    textDecoration: 'none',
  },
}))

// サインイン用ページ
const SignIn = () => {
  const classes = useStyles()
  const router = useRouter()

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const params: SignInParams = {
      email: email,
      password: password,
    }

    try {
      const res = await signIn(params)

      if (res.status === 200) {
        // ログインに成功した場合はCookieに各値を格納
        Cookies.set('_access_token', res.headers['access-token'])
        Cookies.set('_client', res.headers['client'])
        Cookies.set('_uid', res.headers['uid'])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)

        router.push('/')
      } else {
        setAlertMessageOpen(true)
      }
    } catch (err) {
      setAlertMessageOpen(true)
    }
  }

  return (
    <Fragment>
      <form noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Sign In" />
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Email"
              value={email}
              margin="dense"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Password"
              type="password"
              placeholder="英字6文字以上で入力"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="default"
              disabled={!email || !password ? true : false} // 空欄があった場合はボタンを押せないように
              className={classes.submitBtn}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Box textAlign="center" className={classes.box}>
              <Typography variant="body2">アカウントをもっていませんか？</Typography>
              <Link href="/signup">Sign Up now!</Link>
            </Box>
          </CardContent>
        </Card>
      </form>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="アドレスまたはパスワードが有効な値ではありません"
      />
    </Fragment>
  )
}

export default SignIn
