import { Fragment } from 'react'
import { GET_ITEMMASTER } from '../../graphql/query'
import { useQuery } from '@apollo/client'

export const TotalDate = () => {
  const { loading, error, data } = useQuery(GET_ITEMMASTER)

  console.log(data)
  if (loading) return <p>...loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <Fragment>
      {data.itemMasters.map((item_master: any) => (
        <p key={item_master.id}>
          {item_master.id}: {item_master.name}
        </p>
      ))}
    </Fragment>
  )
}
export default TotalDate
