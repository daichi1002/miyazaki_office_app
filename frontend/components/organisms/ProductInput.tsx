import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import UploadPicture from '../atom/UploadPicture'
import InputForm from '../atom/InputForm'
import React, { useState } from 'react'
import InputDate from '../atom/InputDate'
import { GET_ITEMMASTER } from '../../graphql/query'
import { useQuery } from '@apollo/client'
import { ProgressBar } from '../atom/ProgressBar'
import SelectBox from '../atom/SelectBox'

type Product = {
  id: number
  title: string
  num: number | undefined
  price: number | undefined
  purchaseAt: String
}

type Props = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductInputArea: React.FC<Props> = ({ setProducts, products }) => {
  const useStyles = makeStyles(() => ({
    paper: {
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: 20,
      height: '70vh',
      width: '35vw',
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
  }))
  const classes = useStyles()

  const [name, setName] = useState('')
  const [num, setNum] = useState<number | undefined>(undefined)
  const [price, setPrice] = useState<number | undefined>(undefined)
  const [count, setCount] = useState(products.length + 1)
  const [purchaseAt, setPurchaseAt] = useState<String>('')

  const submit = () => {
    setCount(count + 1)
    const newProduct: Product = {
      id: count,
      title: name,
      num: num,
      price: price,
      purchaseAt: purchaseAt,
    }

    setProducts([...products, newProduct])
    setName('')
    setNum(undefined)
    setPrice(undefined)
  }

  const { loading, error, data } = useQuery(GET_ITEMMASTER)
  if (loading) return <ProgressBar />
  if (error) return <p>{error.message}</p>

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.title}>
          <h2>入力欄</h2>
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <SelectBox title="商品名" select={data.itemMasters} onChange={setName} value={name} />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <InputForm title="個数" onChange={setNum} value={num} />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <InputForm title="金額" onChange={setPrice} value={price} />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <InputDate title="購入日" onChange={setPurchaseAt} value={purchaseAt} />
        </Grid>
        <Grid item xs={6} className={classes.body}>
          {/* <UploadPicture /> */}
        </Grid>
        <Grid item xs={6} className={classes.body}>
          <Button variant="outlined" color="primary" component="label" onClick={submit}>
            入力確認
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductInputArea
