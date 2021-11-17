import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import InputForm from '../atom/InputForm'
import { useState } from 'react'
import { GET_ITEMMASTER } from '../../graphql/query'
import { useQuery } from '@apollo/client'
import SelectBox from '../atom/SelectBox'
import { HistoryDetail, History } from '../../types'
import AlertMessage from '../molecules/AlertMessage'
import PurchaseDateRegistration from '../molecules/Product/PurchaseDateRegistration'

type Props = {
  subtotal: number
  setSubtotal: React.Dispatch<React.SetStateAction<number>>
  setHistoryDetail: React.Dispatch<React.SetStateAction<HistoryDetail[]>>
  historyDetail: HistoryDetail[]
  setHistory: React.Dispatch<React.SetStateAction<History>>
}

export const ProductInputArea = (props: Props) => {
  const useStyles = makeStyles(() => ({
    paper: {
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: 20,
      height: '65vh',
      width: '100%',
    },
    body: {
      padding: 10,
      fontSize: 18,
      paddingLeft: 50,
      paddingRight: 50,
    },
    title: {
      paddingLeft: 50,
    },
    button: {
      paddingTop: 30,
    },
  }))
  const classes = useStyles()

  const [content, setContent] = useState('')
  const [num, setNum] = useState('')
  const [price, setPrice] = useState('')
  const [count, setCount] = useState(props.historyDetail.length + 1)

  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

  const submit = () => {
    if (content === '' || num === '' || price === '') {
      setAlertMessageOpen(true)
      return
    }
    setCount(count + 1)
    // historyDetail
    const newHistoryDetail: HistoryDetail = {
      id: count,
      historyId: null,
      content: content,
      price: price,
      num: num,
    }
    props.setSubtotal(props.subtotal + Number(price))
    setPrice('')
    setNum('')
    props.setHistoryDetail([...props.historyDetail, newHistoryDetail])
  }

  const { loading, error, data } = useQuery(GET_ITEMMASTER)
  if (loading) return <p>...loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.title}>
          <h2>入力欄</h2>
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <SelectBox title="商品名" select={data.itemMasters} onChange={setContent} value={content} />
        </Grid>

        <Grid item xs={12} className={classes.body}>
          <InputForm title="個数" onChange={setNum} value={num} />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <InputForm title="金額" onChange={setPrice} value={price} />
        </Grid>
        <Grid container item xs={6} md={6} lg={6} justifyContent="space-around" className={classes.button}>
          <PurchaseDateRegistration setHistory={props.setHistory} />
        </Grid>
        <Grid container item xs={6} md={6} lg={6} justifyContent="space-around" className={classes.button}>
          <Button variant="outlined" color="primary" component="label" onClick={submit}>
            入力確認
          </Button>
        </Grid>
      </Grid>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="未入力の項目があります"
      />
    </Paper>
  )
}

export default ProductInputArea
