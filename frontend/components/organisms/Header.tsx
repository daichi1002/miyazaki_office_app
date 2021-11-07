import { Fragment, useContext, useCallback } from 'react'
import { useRouter } from 'next/dist/client/router'

import AppBar from '@material-ui/core/AppBar'
import { Button } from '@material-ui/core'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

import { AuthContext } from '../../pages/_app'
import { signOut } from '../../lib/api/auth'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      paddingRight: 24,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
  })
)

type Props = {
  handleDrawerOpen: () => void
  open: boolean
}

export const Header = (props: Props) => {
  const { handleDrawerOpen, open } = props
  const classes = useStyles()
  const nextRouter = useRouter()
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext)
  const handleClickLogOut = useCallback(() => {
    signOut
    nextRouter.push('/').then(() => setIsSignedIn(false))
  }, [])

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        {isSignedIn && (
          <Fragment>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              管理画面
            </Typography>
            <Button onClick={handleClickLogOut}>ログアウト</Button>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
