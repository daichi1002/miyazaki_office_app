import { memo } from 'react'
import Link from 'next/link'

import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      display: 'block',
      width: '100%',
      position: 'fixed',
      left: 0,
      bottom: 0,
      zIndex: 1000,
      textAlign: 'center',
    },
  })
)

export const Copyright = () => {
  const classes = useStyles()
  return (
    <Typography className={classes.footer} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="/">管理画面</Link> {new Date().getFullYear()}
      {'.Vitalize'}
    </Typography>
  )
}

export default memo(Copyright)
