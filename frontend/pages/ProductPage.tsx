import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProductInput from '../components/organisms/ProductInput'
import ProductTable from '../components/organisms/ProductTable'
import { Product } from '../types'

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [subtotal, setSubtotal] = useState<number>(0)
  return (
    <Container maxWidth="lg">
      <h1>購入品登録</h1>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} lg={6}>
          <ProductInput setProducts={setProducts} products={products} subtotal={subtotal} setSubtotal={setSubtotal} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ProductTable setProducts={setProducts} products={products} subtotal={subtotal} setSubtotal={setSubtotal} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductPage
