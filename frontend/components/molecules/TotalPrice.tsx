import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'
import { GET_ALLPRICE } from '../../graphql/query'
import { useQuery } from '@apollo/client'

const useStyles = makeStyles({
  title: {
    fontSize: 30,
    display: 'flex',
  },
})

export const TotalPrice = () => {
  const { loading, error, data } = useQuery(GET_ALLPRICE)
  const classes = useStyles()
  if (loading) return <p>...loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <Fragment>
      <div className={classes.title}>
        <p>合計金額</p>
        <p>￥</p>
        <p>{data.allPrice}</p>
      </div>
    </Fragment>
  )
}
