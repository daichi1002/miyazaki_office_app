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

export const CREATE_HISTORY = gql`
  mutation ($input: [CreateHistoryInput!]) {
    createHistory(input: $input) {
      history {
        userId
        title
        purchaseAt
      }
    }
  }
`

export const CREATE_HISTORY_DETAIL = gql`
  mutation createHistoryDetailMutation($input: CreateHistoryDetailInput!) {
    createHistoryDetail(input: $input) {
      historyDetail {
        historyId
        content
        price
      }
    }
  }
`
