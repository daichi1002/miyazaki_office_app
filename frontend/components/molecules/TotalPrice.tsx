import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'

type Props = {
  price: number
}
const useStyles = makeStyles({
  title: {
    fontSize: 30,
    display: 'flex',
  },
})

export const TotalPrice = (props: Props) => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.title}>
        <p>合計金額</p>
        <p>￥</p>
        <p>{props.price}</p>
      </div>
    </Fragment>
  )
}
