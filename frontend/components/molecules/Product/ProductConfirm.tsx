import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { CREATE_HISTORY, CREATE_HISTORY_DETAIL } from '../../../graphql/mutation'
import React, { useState } from 'react'

type Product = {
  id: number
  name: string
  num: number
  price: number
  date: String
}

const ProductConfirm = (props: any) => {
  const useStyles = makeStyles(() => ({
    root: {
      paddingLeft: 50,
    },
  }))
  const classes = useStyles()

  // const [subtotal, setSubTotal] = useState<number>(0)
  // const sumPrice = () => {
  //   props.products.forEach((product: Product) => {
  //     const price = product.price
  //     setSubTotal(subtotal + price)
  //   })
  // }

  // const [subtotal, setSubTotal] = useState<number>(0)
  let subtotal: number = 0
  props.products.forEach((product: Product) => {
    const price: number = product.price
    subtotal + price
  })

  const [createHistory, { error }] = useMutation(CREATE_HISTORY, {
    variables: { input: { userId: 1, purchaseAt: props.products.date, title: props.products.name } },
  })
  const [createHistoryDetail] = useMutation(CREATE_HISTORY_DETAIL, {
    variables: {
      input: { historyId: props.products.id, content: props.products.name, price: props.products.price },
    },
  })
  if (error) return <p>{error.message}</p>

  return (
    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
      <Grid item xs={6} className={classes.root}>
        <h2>合計金額：{subtotal}円</h2>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          component="label"
          onClick={() => {
            createHistory(), createHistoryDetail()
          }}
        >
          確定
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductConfirm
