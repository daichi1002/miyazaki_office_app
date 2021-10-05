import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

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

export const ProductDisplayArea = (props: Props) => {
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
    },
    title: {
      paddingLeft: 50,
    },
  }))
  const classes = useStyles()

  const columns: GridColDef[] = [
    { field: 'id', headerName: '', width: 90 },
    {
      field: 'product',
      headerName: '商品',
      width: 110,
      editable: true,
    },
    {
      field: 'num',
      headerName: '個数',
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: '金額',
      type: 'number',
      width: 110,
      editable: true,
    },
  ]

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.title}>
          <h2>入力確認</h2>
        </Grid>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={props.products}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
        <Button variant="outlined" color="primary" component="label">
          確定する
        </Button>
      </Grid>
    </Paper>
  )
}

export default ProductDisplayArea
