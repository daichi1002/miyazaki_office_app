import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Table } from '@material-ui/core'
import ProductListTitle from '../molecules/Product/ProductListTitle'
import ProductList from '../molecules/Product/ProductList'
import ProductConfirm from '../molecules/Product/ProductConfirm'

type Product = {
  id: number
  name: string
  num: number
  price: number
  date: any
}

type Props = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const ProductTable: React.FC<Props> = ({ products, setProducts }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: 20,
      height: '70vh',
      width: '35vw',
    },
    title: {
      paddingLeft: 50,
    },
  }))
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.title}>
          <h2>入力確認</h2>
        </Grid>
        <Table>
          <ProductListTitle />
          <ProductList setProducts={setProducts} products={products} />
        </Table>
      </Grid>
      <ProductConfirm setProducts={setProducts} products={products} />
    </Paper>
  )
}

export default ProductTable
