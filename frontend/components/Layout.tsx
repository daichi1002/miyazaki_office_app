import { useContext, useCallback, useState, memo } from 'react'
import { createTheme } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import { AuthContext } from '../pages/_app'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Header from './organisms/Header'
import SideBar from './molecules/SideBar'
import Copyright from './molecules/Copyright'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Lato',
      '游ゴシック Medium',
      '游ゴシック体',
      'Yu Gothic Medium',
      'YuGothic',
      'ヒラギノ角ゴ ProN',
      'Hiragino Kaku Gothic ProN',
      'メイリオ',
      'Meiryo',
      'ＭＳ Ｐゴシック',
      'MS PGothic',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: { main: colors.amber[500] }, // テーマの色
  },
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    pageTitle: {
      marginBottom: theme.spacing(1),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    signIn: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      display: 'grid',
      placeContent: 'center',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  })
)

export interface Layout {
  children: React.ReactNode
  title: string
}

export const Layout: React.FC<Layout> = ({ children, title }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { isSignedIn } = useContext(AuthContext)
  const handleDrawerOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleDrawerClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header handleDrawerOpen={handleDrawerOpen} open={open} />
        <SideBar handleDrawerClose={handleDrawerClose} open={open} />
        {isSignedIn ? (
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Typography component="h2" variant="h5" color="inherit" noWrap className={classes.pageTitle}>
                {title}
              </Typography>
              {children}
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        ) : (
          <main className={classes.signIn}>
            {children}
            <Box pt={4}>
              <Copyright />
            </Box>
          </main>
        )}
      </div>
    </ThemeProvider>
  )
}

export default memo(Layout)
