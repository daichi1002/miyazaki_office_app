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
      inventoryDetailObjectCount
    }
  }
`

export const SELECT_ITEMMASTER = gql`
  query ($name: String!) {
    selectItemMasters(name: $name) {
      id
      name
      requiredStock
      inventoryDetails {
        id
        stockQuantity
        updatedAt
      }
      inventoryDetailObjectCount
    }
  }
`
