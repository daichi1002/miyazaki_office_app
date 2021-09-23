import { gql } from '@apollo/client'

// 全件取得
export const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      type
    }
  }
`

// 指定したIDのTODOを1件取得
export const GET_TODO = gql`
  query getTodo($id: String!) {
    todo(id: $id) {
      id
      type
    }
  }
`
