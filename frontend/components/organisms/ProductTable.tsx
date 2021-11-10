import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Table } from '@material-ui/core'
import ProductListTitle from '../molecules/Product/ProductListTitle'
import ProductList from '../molecules/Product/ProductList'
import ProductConfirm from '../molecules/Product/ProductConfirm'
import { HistoryDetail, History } from '../../types'
import React, { useState } from 'react'

type Props = {
  subtotal: number
  setSubtotal: React.Dispatch<React.SetStateAction<number>>
  setHistoryDetail: React.Dispatch<React.SetStateAction<HistoryDetail[]>>
  historyDetail: HistoryDetail[]
  history: History
}

const ProductTable = (props: Props) => {
  const { subtotal, setSubtotal, historyDetail, setHistoryDetail, history } = props
  const useStyles = makeStyles(() => ({
    paper: {
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: 20,
      height: '65vh',
      width: '35vw',
    },
    title: {
      paddingLeft: 50,
    },
  }))
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.title}>
          <h2>入力確認</h2>
        </Grid>
        <Table>
          <ProductListTitle />
          <ProductList setHistoryDetail={setHistoryDetail} historyDetail={historyDetail} />
        </Table>
      </Grid>
      <ProductConfirm
        subtotal={subtotal}
        setSubtotal={setSubtotal}
        setHistoryDetail={setHistoryDetail}
        historyDetail={historyDetail}
        history={history}
      />
    </Paper>
  )
}

export default ProductTable
