import Button from '@material-ui/core/Button'
import { TableCell, TableRow, TableBody } from '@material-ui/core'

type Product = {
  id: number
  name: string
  num: number
  price: number
  date: any
}

const ProductList = (props: any) => {
  const handleDelete = (product: Product) => {
    props.setProducts((prev: any) => prev.filter((t: any) => t.id !== product.id))
  }

  return (
    <TableBody>
      {props.products.map((product: Product) => (
        <TableRow hover key={product.id}>
          <TableCell>
            <Button variant="outlined" color="primary" onClick={() => handleDelete(product)}>
              削除
            </Button>
          </TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.num}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ProductList
