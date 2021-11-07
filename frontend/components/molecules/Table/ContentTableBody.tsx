import { memo } from 'react'
import Button from '@material-ui/core/Button'
import { TableCell, TableRow, TableBody } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { UPDATE_STOCK } from '../../../graphql/mutation'

type ItemMasterProps = {
  id: number
  name: string
  requiredStock: number
  inventoryDetailPrice: number
  inventoryDetailObjectCount: number
  itemMasterUpdatedAt: string
  updatedAt: Date
  inventory: {
    id: number
    stock: number
  }
}

export const ContentTableBody = (props: any) => {
  const { data, page, rowsPerPage } = props
  const [decrement, { error }] = useMutation(UPDATE_STOCK)

  if (error) return <p>{error.message}</p>
  return (
    <TableBody>
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item_master: ItemMasterProps) => (
        //ページ切り替えの要素を取得
        <TableRow hover key={item_master.id}>
          {/* hoverを入れることでマウスポイントが表の上に乗った時に色が変わるアクションがつきます */}
          <TableCell component="th" scope="row">
            {item_master.id}
          </TableCell>
          <TableCell>{item_master.name}</TableCell>
          <TableCell>{item_master.requiredStock}</TableCell>
          <TableCell>{item_master.inventory.stock}</TableCell>
          <TableCell>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => decrement({ variables: { input: { id: item_master.inventory.id } } })}
            >
              消費
            </Button>
          </TableCell>
          <TableCell>{item_master.inventoryDetailPrice}</TableCell>
          <TableCell>{item_master.itemMasterUpdatedAt}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
