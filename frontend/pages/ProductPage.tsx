import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProductInput from '../components/organisms/ProductInput'
import ProductTable from '../components/organisms/ProductTable'

type Product = {
  id: number
  name: string
  num: number
  price: number
  date: any
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  return (
    <Container maxWidth="lg">
      <h1>購入品登録</h1>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} lg={6}>
          <ProductInput setProducts={setProducts} products={products} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ProductTable setProducts={setProducts} products={products} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductPage
