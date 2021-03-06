import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { CREATE_HISTORY, CREATE_HISTORY_DETAIL } from '../../../graphql/mutation'
import React, { useState } from 'react'
import axios from 'axios'
import { ProgressBar } from '../../atom/ProgressBar'
import { HistoryDetail, History } from '../../../types'
import AlertMessage from '../AlertMessage'

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
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)
  const [registrationMessageOpen, setRegistrationMessageOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  // axios
  const resolvedServer = (() => {
    if (process.env.isProd) {
      return process.env.server
    }
    // dev
    // return 'http://localhost:3000'
    // prod
    return 'https://miyazakiofficeapp.herokuapp.com'
  })()

  const Axios = axios.create({ baseURL: resolvedServer, timeout: 5000 })

  const createHistory = async (historyDetail: HistoryDetail[], history: History) => {
    if (loading) return
    setLoading(true)
    if (history.purchaseAt === '') {
      setAlertMessageOpen(true)
      return
    }
    await Axios.post('/api/v1/histories/', { history }).then((res: any) => {
      console.log(res)
      if (res.status === 200) {
        Axios.post('/api/v1/history_details/', { historyDetail }).then((res: any) => {
          console.log(res)
          if (res.status === 204) {
            props.setSubtotal(0)
            props.setHistoryDetail([])
            console.log(props.historyDetail)
            setRegistrationMessageOpen(true)
          }
        })
      }
    })
    setLoading(false)
  }
  return (
    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
      <Grid container item xs={12} md={6} lg={6} justifyContent="space-around">
        <h2>合計：{props.subtotal}円</h2>
      </Grid>
      <Grid container item xs={12} md={6} lg={6} justifyContent="space-around">
        <Button
          variant="contained"
          color="primary"
          component="label"
          disabled={loading}
          onClick={() => {
            createHistory(props.historyDetail, props.history)
          }}
        >
          確定
        </Button>
      </Grid>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="初期登録を入力してください"
      />
      <AlertMessage
        open={registrationMessageOpen}
        setOpen={setRegistrationMessageOpen}
        severity="success"
        message="商品登録が完了しました"
      />
    </Grid>
  )
}

export default ProductConfirm
