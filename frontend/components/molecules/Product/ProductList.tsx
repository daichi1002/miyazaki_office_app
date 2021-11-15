import Button from '@material-ui/core/Button'
import { TableCell, TableRow, TableBody } from '@material-ui/core'
import { HistoryDetail } from '../../../types'

const ProductList = (props: any) => {
  const handleDelete = (historyDetail: HistoryDetail) => {
    props.setHistoryDetail((prev: any) => prev.filter((t: any) => t.id !== historyDetail.id))
    props.setSubtotal(props.subtotal - Number(historyDetail.price))
  }

  return (
    <TableBody>
      {props.historyDetail.map((history: HistoryDetail) => (
        <TableRow hover key={history.id}>
          <TableCell>
            <Button variant="outlined" color="primary" onClick={() => handleDelete(history)}>
              削除
            </Button>
          </TableCell>
          <TableCell>{history.content}</TableCell>
          <TableCell>{history.num}</TableCell>
          <TableCell>{history.price}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ProductList
