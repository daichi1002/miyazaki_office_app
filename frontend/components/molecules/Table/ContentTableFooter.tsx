import React from 'react'
import { TableRow, TableFooter, TablePagination } from '@material-ui/core'

export const ContentTableFooter = (props: any) => {
  const { data, rowsPerPage, page, onPageChange, onRowsPerPageChange } = props

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          labelRowsPerPage="表示件数:"
          rowsPerPageOptions={[
            { label: '10件', value: 10 },
            { label: '50件', value: 50 },
            { label: '100件', value: 100 },
            { label: '全て', value: data.length },
          ]}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            native: true,
          }}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </TableRow>
    </TableFooter>
  )
}
