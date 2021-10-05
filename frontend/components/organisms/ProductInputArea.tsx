import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import UploadPicture from '../molecules/Product/UploadPicture'
import InputForm from '../molecules/Product/InputForm'
import { useState, useEffect } from 'react'

type Product = {
  id: number
  name: string
  num: number
  price: number
}

type Props = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductInputArea: React.FC<Props> = ({ setProducts, products }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: 20,
      height: '65vh',
      width: '35vw',
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
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
  const [num, setNum] = useState(0)
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(name, num, price)
  })

  const submit = () => {
    setCount(count + 1)
    const newProduct: Product = {
      id: count,
      name: name,
      num: num,
      price: price,
    }

    setProducts([newProduct, ...products])
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.title}>
          <h2>入力欄</h2>
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <InputForm title="商品名" onChange={setName} value={name} />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <InputForm title="個数" onChange={setNum} value={num} />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <InputForm title="金額" onChange={setPrice} value={price} />
        </Grid>
        <Grid item xs={6} className={classes.body}>
          <UploadPicture />
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
