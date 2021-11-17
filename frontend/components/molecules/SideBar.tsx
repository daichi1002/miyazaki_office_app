import React, { useContext, Fragment } from 'react'
import Link from 'next/link'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import clsx from 'clsx'
import List from '@material-ui/core/List'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import HomeIcon from '@material-ui/icons/Home'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import { Calculate } from '@mui/icons-material'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

import Divider from '@material-ui/core/Divider'

import { AuthContext } from '../../pages/_app'

const drawerWidth = 240

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
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
  })
)

type Props = {
  handleDrawerClose: () => void
  open: boolean
}

export const SideBar = (props: Props) => {
  const { handleDrawerClose, open } = props
  const classes = useStyles()
  const { isSignedIn } = useContext(AuthContext)

  return (
    <Fragment>
      {isSignedIn && (
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link href="/" passHref>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
            </Link>
            <Link href="/ProductPage" passHref>
              <ListItem button>
                <ListItemIcon>
                  <LibraryAddIcon />
                </ListItemIcon>
                <ListItemText primary="商品追加" />
              </ListItem>
            </Link>
            <Link href="/calculation" passHref>
              <ListItem button>
                <ListItemIcon>
                  <Calculate />
                </ListItemIcon>
                <ListItemText primary="購入履歴" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      )}
    </Fragment>
  )
}

export default SideBar
