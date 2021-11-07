import Button from '@material-ui/core/Button'
import { TableCell, TableRow, TableBody } from '@material-ui/core'
import { Product } from '../../../types'

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
          <TableCell>{product.title}</TableCell>
          <TableCell>{product.num}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.purchaseAt}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ProductList
