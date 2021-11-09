import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { CREATE_HISTORY, CREATE_HISTORY_DETAIL } from '../../../graphql/mutation'
import React, { useState } from 'react'
import axios from 'axios'
import { ProgressBar } from '../../atom/ProgressBar'
import { HistoryDetail, History } from '../../../types'

type Props = {
  subtotal: number
  setSubtotal: React.Dispatch<React.SetStateAction<number>>
  setHistoryDetail: React.Dispatch<React.SetStateAction<HistoryDetail[]>>
  historyDetail: HistoryDetail[]
  history: History
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
  const createHistory = (history: HistoryDetail[]) => {
    // historyをキー、historyDetailをバリューの形に変換する
    axios.post('http://localhost:3000/api/v1/histories/', { history }).then((res: any) => {
      console.log(res)
      if (res.status === 204) {
        props.setSubtotal(0)
        props.setHistoryDetail([])
        console.log(props.historyDetail)
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
            createHistory(props.historyDetail)
          }}
        >
          確定
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductConfirm
