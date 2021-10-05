import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProductInputArea from '../components/organisms/ProductInputArea'
import ProductDisplayArea from '../components/organisms/ProductDisplayArea'

type Product = {
  id: number
  name: string
  num: number
  price: number
}

const rows: Product[] = [
  { id: 1, name: 'インク', num: 5, price: 1000 },
  { id: 2, name: 'ペン', num: 20, price: 2000 },
  { id: 3, name: '飲み会', num: 1, price: 5000 },
  { id: 4, name: 'のり', num: 3, price: 100 },
  { id: 5, name: 'ボールペン', num: 10, price: 50 },
  { id: 6, name: '用紙', num: 1, price: 100 },
]

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState(rows)
  return (
    <Container maxWidth="lg">
      <h1>購入品登録</h1>
      <Grid container spacing={10} justify="center">
        <Grid item xs={12} md={6} lg={6}>
          <ProductInputArea setProducts={setProducts} products={products} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ProductDisplayArea setProducts={setProducts} products={products} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductPage
