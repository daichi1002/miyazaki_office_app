import { gql } from '@apollo/client'

// 全件取得
export const GET_HISTORY = gql`
  {
    histories {
      id
      title
    }
  }
`
export const GET_ALLPRICE = gql`
  query {
    allPrice: allPrice
  }
`

export const GET_ITEMMASTER = gql`
  query {
    itemMasters {
      id
      name
      requiredStock
      inventoryDetails {
        id
        stockQuantity
        updatedAt
      }
    }
  }
`

export const SELECT_ITEMMASTER = gql`
  query ($name: String!) {
    selectItemMasters(name: $name) {
      id
      name
      itemPrice
      requiredStock
      inventoryDetails {
        id
        stockQuantity
        updatedAt
      }
      inventoryDetailObjectCount
      inventoryDetailPrice
    }
  }
`
