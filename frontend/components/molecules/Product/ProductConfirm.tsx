import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { CREATE_HISTORY, CREATE_HISTORY_DETAIL } from '../../../graphql/mutation'
import React, { useState } from 'react'
import axios from 'axios'
import { ProgressBar } from '../../atom/ProgressBar'
import { Product } from '../../../types'

type Props = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  subtotal: number
  setSubtotal: React.Dispatch<React.SetStateAction<number>>
}

const ProductConfirm = (props: Props) => {
  const useStyles = makeStyles(() => ({
    root: {
      paddingLeft: 50,
    },
  }))
  const classes = useStyles()

  // graphqlの保存処理（できてない）
  // const [createHistory, { error }] = useMutation(CREATE_HISTORY, {
  //   variables: { input: { userId: 1, purchaseAt: props.products.date, title: props.products.name } },
  // })
  // const [createHistoryDetail] = useMutation(CREATE_HISTORY_DETAIL, {
  //   variables: {
  //     input: { historyId: props.products.id, content: props.products.name, price: props.products.price },
  //   },
  // })
  // if (error) return <p>{error.message}</p>

  // axios
  const createHistory = (history: Product[]) => {
    axios.post('http://localhost:3000/api/v1/histories/', { history }).then((res: any) => {
      console.log(res)
      if (res.status === 204) {
        props.setSubtotal(0)
        props.setProducts([])
        console.log(props.products)
        return <ProgressBar />
      }
    })
  }
  return (
    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
      <Grid item xs={6} className={classes.root}>
        <h2>合計金額：{props.subtotal}円</h2>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          component="label"
          onClick={() => {
            createHistory(props.products)
          }}
        >
          確定
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductConfirm
