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
  query ($date: [String!]) {
    allPrice: allPrice(date: $date)
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
  query ($name: String!, $date: [String!]) {
    selectItemMasters(name: $name, date: $date) {
      id
      name
      itemPrice
      requiredStock
      updatedAt
      itemMasterUpdatedAt
      inventoryDetails {
        id
        stockQuantity
      }
      inventory {
        id
        stock
      }
      inventoryDetailObjectCount
      inventoryDetailPrice
    }
  }
`
