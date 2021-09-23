import { GET_TODOS } from '../../graphql/query'
import { useQuery } from '@apollo/client'

export const TotalDate = () => {
  const { loading, error, data } = useQuery(GET_TODOS)

  if (loading) return <p>...loading</p>
  if (error) return <p>{error.message}</p>
  return data.todos.map((todo: any) => (
    <p key={todo.id}>
      {todo.id}: {todo.type}
    </p>
  ))
}
export default TotalDate
