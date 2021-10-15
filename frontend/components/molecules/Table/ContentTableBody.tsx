import React from 'react'
import { TableCell, TableRow, TableBody } from '@material-ui/core'

type ItemMasterProps = {
  id: number
  name: string
  requiredStock: number
  inventoryDetailPrice: number
  inventoryDetailObjectCount: number
  updatedAt: Date
  inventory: {
    stock: number
  }
}

export const ContentTableBody = (props: any) => {
  const { data, page, rowsPerPage } = props

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
          <TableCell>{item_master.inventoryDetailPrice}</TableCell>
          <TableCell>{item_master.updatedAt}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
