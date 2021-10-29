import { TableCell, TableRow, TableHead } from '@material-ui/core'

const ProductListTitle = () => {
  return (
    <TableHead>
      <TableRow style={{ backgroundColor: '#F2F2F2' }}>
        <TableCell>削除</TableCell>
        <TableCell>商品名</TableCell>
        <TableCell>個数</TableCell>
        <TableCell>金額</TableCell>
        <TableCell>購入日</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default ProductListTitle
