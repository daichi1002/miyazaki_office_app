import { LinearProgress } from '@material-ui/core'
import { Fragment, memo } from 'react'

export const ProgressBar = memo(() => {
  return (
    <Fragment>
      <LinearProgress color="primary" />
    </Fragment>
  )
})
