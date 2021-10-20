import { gql } from '@apollo/client'

export const UPDATE_STOCK = gql`
  mutation ($input: UpdateInventoryInput!) {
    updateInventory(input: $input) {
      inventory {
        id
        stock
      }
    }
  }
`
