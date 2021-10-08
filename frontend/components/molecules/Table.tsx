import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableFooter,
  TablePagination,
  Paper,
} from '@material-ui/core'

type ItemMasterProps = {
  id: number
  name: string
  requiredStock: number
  inventoryDetailPrice: number
  inventoryDetailObjectCount: number
  updatedAt: Date
}

export const TableField = (props: any) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const { loading, error, data } = props
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  if (loading) return <p>...loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <TableContainer component={Paper} style={{ marginBottom: 30 }}>
      {/* componentにライブラリのPaperをつけることで立体感がでてよくなります */}
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#F2F2F2' }}>
            <TableCell>管理番号</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>必要数</TableCell>
            <TableCell>在庫数</TableCell>
            <TableCell>購入金額</TableCell>
            <TableCell>最終更新日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.selectItemMasters
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item_master: ItemMasterProps) => (
              //ページ切り替えの要素を取得
              <TableRow hover key={item_master.id}>
                {/* hoverを入れることでマウスポイントが表の上に乗った時に色が変わるアクションがつきます */}
                <TableCell component="th" scope="row">
                  {item_master.id}
                </TableCell>
                <TableCell>{item_master.name}</TableCell>
                <TableCell>{item_master.requiredStock}</TableCell>
                <TableCell>{item_master.inventoryDetailObjectCount}</TableCell>
                <TableCell>{item_master.inventoryDetailPrice}</TableCell>
                <TableCell>{item_master.updatedAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              labelRowsPerPage="表示件数:"
              rowsPerPageOptions={[
                { label: '10件', value: 10 },
                { label: '50件', value: 50 },
                { label: '100件', value: 100 },
                { label: '全て', value: data.selectItemMasters.length },
              ]}
              count={data.selectItemMasters.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
