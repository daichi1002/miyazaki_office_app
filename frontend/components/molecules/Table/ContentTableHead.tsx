import { TableHead, TableCell, TableRow } from '@material-ui/core'

export const ContentTableHead = () => {
  return (
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
  )
}
