import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProductInput from '../components/organisms/ProductInput'
import ProductTable from '../components/organisms/ProductTable'
import { History, HistoryDetail } from '../types'
import PurchaseDateRegistration from '../components/molecules/Product/PurchaseDateRegistration'

const ProductPage = () => {
  const [subtotal, setSubtotal] = useState<number>(0)

  const [history, setHistory] = useState<History>({ id: 0, userId: 0, title: '', purchaseAt: '' })
  const [historyDetail, setHistoryDetail] = useState<HistoryDetail[]>([])
  return (
    <Container maxWidth="lg">
      <h1>購入品登録</h1>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} lg={6}>
          <ProductInput
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            setHistoryDetail={setHistoryDetail}
            historyDetail={historyDetail}
            setHistory={setHistory}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ProductTable
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            setHistoryDetail={setHistoryDetail}
            historyDetail={historyDetail}
            history={history}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductPage
