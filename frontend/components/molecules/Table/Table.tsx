import React from 'react'
import { TableContainer, Table, Paper } from '@material-ui/core'
import { ProgressBar } from '../../atom/ProgressBar'
import { ContentTableHead } from './ContentTableHead'
import { ContentTableBody } from './ContentTableBody'
import { ContentTableFooter } from './ContentTableFooter'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

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
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: '30',
    },
    searchField: {
      height: '20vh',
    },
    resultField: {
      height: '60vh',
    },
  }))

  const classes = useStyles()
  const searchFieldPaper = clsx(classes.paper)

  if (loading)
    return (
      <Paper className={searchFieldPaper}>
        <ProgressBar />
      </Paper>
    )
  if (error) return <p>{error.message}</p>
  return (
    <TableContainer component={Paper} style={{ marginBottom: 30 }}>
      {/* componentにライブラリのPaperをつけることで立体感がでてよくなります */}
      <Table>
        <ContentTableHead />
        <ContentTableBody
          loading={loading}
          error={error}
          data={data.selectItemMasters}
          page={page}
          rowsPerPage={rowsPerPage}
        />
        <ContentTableFooter
          data={data.selectItemMasters}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  )
}
